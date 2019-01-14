import { PLATFORM, Reporter } from '@aurelia/kernel';
import { expect } from 'chai';
import {
  BasicConfiguration,
  DirtyCheckSettings,
  IDirtyChecker,
  LifecycleFlags
} from '../../src/index';

declare var BROWSER;

describe('DirtyChecker', function() {
  afterEach(function () {
    DirtyCheckSettings.resetToDefault();
  });

  function setup() {
    const container = BasicConfiguration.createContainer();
    const dirtyChecker = container.get(IDirtyChecker);

    return { dirtyChecker };
  }

  const expectedFlags = LifecycleFlags.fromTick | LifecycleFlags.updateTargetInstance;

  // Used to have bigger lists here but the timings drift so much in FF that there's just no way to get any kind of reliable test.
  // We'll have to see with E2E tests whether everything actually ends up working as well in FF.
  const specs = [
    {
      framesPerCheck: 1,
      frameChecks: [
        { callCount: 0 },
        { oldValue: '0', newValue: '1', callCount: 1, flags: expectedFlags },
        { oldValue: '1', newValue: '2', callCount: 2, flags: expectedFlags },
        { oldValue: '2', newValue: '3', callCount: 3, flags: expectedFlags },
        { oldValue: '3', newValue: '4', callCount: 4, flags: expectedFlags },
        { oldValue: '4', newValue: '5', callCount: 5, flags: expectedFlags },
        { oldValue: '5', newValue: '6', callCount: 6, flags: expectedFlags }
      ]
    },
    {
      framesPerCheck: 2,
      frameChecks: [
        { callCount: 0 },
        { oldValue: '0', newValue: '1', callCount: 1, flags: expectedFlags },
        { oldValue: '0', newValue: '1', callCount: 1, flags: expectedFlags },
        { oldValue: '1', newValue: '3', callCount: 2, flags: expectedFlags },
        { oldValue: '1', newValue: '3', callCount: 2, flags: expectedFlags },
        { oldValue: '3', newValue: '5', callCount: 3, flags: expectedFlags },
        { oldValue: '3', newValue: '5', callCount: 3, flags: expectedFlags }
      ]
    },
    {
      framesPerCheck: 3,
      frameChecks: [
        { callCount: 0 },
        { callCount: 0 },
        { oldValue: '0', newValue: '2', callCount: 1, flags: expectedFlags },
        { oldValue: '0', newValue: '2', callCount: 1, flags: expectedFlags },
        { oldValue: '0', newValue: '2', callCount: 1, flags: expectedFlags },
        { oldValue: '2', newValue: '5', callCount: 2, flags: expectedFlags },
        { oldValue: '2', newValue: '5', callCount: 2, flags: expectedFlags }
      ]
    },
    {
      framesPerCheck: 6,
      frameChecks: [
        { callCount: 0 },
        { callCount: 0 },
        { callCount: 0 },
        { callCount: 0 },
        { callCount: 0 },
        { oldValue: '0', newValue: '5', callCount: 1, flags: expectedFlags },
        { oldValue: '0', newValue: '5', callCount: 1, flags: expectedFlags }
      ]
    }
  ];

  // TODO: fix this test in firefox
  if (typeof BROWSER === 'undefined' || BROWSER === 'CHROME') {
    for (const spec of specs) {
      it(`updates after ${spec.framesPerCheck} RAF call`, function(done) {
        const { framesPerCheck, frameChecks } = spec;
        DirtyCheckSettings.framesPerCheck = framesPerCheck;
        const { dirtyChecker } = setup();

        const obj1 = { foo: 0 };
        const obj2 = { foo: 0 };

        const observer1 = dirtyChecker.createProperty(obj1, 'foo');
        const observer2 = dirtyChecker.createProperty(obj2, 'foo');

        let callCount1: number = 0;
        let newValue1: string;
        let oldValue1: string;
        let flags1: LifecycleFlags;
        const subscriber1 = {
          handleChange($newValue: string, $oldValue: string, $flags: LifecycleFlags) {
            ++callCount1;
            newValue1 = $newValue;
            oldValue1 = $oldValue;
            flags1 = $flags;
          }
        };

        let callCount2: number = 0;
        let newValue2: string;
        let oldValue2: string;
        let flags2: LifecycleFlags;
        const subscriber2 = {
          handleChange($newValue: string, $oldValue: string, $flags: LifecycleFlags) {
            ++callCount2;
            newValue2 = $newValue;
            oldValue2 = $oldValue;
            flags2 = $flags;
          }
        };

        let callCount3: number = 0;
        let newValue3: string;
        let oldValue3: string;
        let flags3: LifecycleFlags;
        const subscriber3 = {
          handleChange($newValue: string, $oldValue: string, $flags: LifecycleFlags) {
            ++callCount3;
            newValue3 = $newValue;
            oldValue3 = $oldValue;
            flags3 = $flags;
          }
        };

        let callCount4: number = 0;
        let newValue4: string;
        let oldValue4: string;
        let flags4: LifecycleFlags;
        const subscriber4 = {
          handleChange($newValue: string, $oldValue: string, $flags: LifecycleFlags) {
            ++callCount4;
            newValue4 = $newValue;
            oldValue4 = $oldValue;
            flags4 = $flags;
          }
        };

        let frameCount = 0;
        function verifyCalled(marker: number) {
          // marker is just to make it easier to pin down failing assertions from the test logs
          const expected = frameChecks[frameCount];
          for (const callCount of [callCount1, callCount2, callCount3, callCount4]) {
            // Allow RAF counters to drift by one because FF timings suck and the NodeJS polyfill apparently sucks too
            // TODO: fix NodeJS polyfill, find a way to make code more robust in dealing with FF timing problems
            if (callCount < expected.callCount - 1 || callCount > expected.callCount + 1) {
              expect(callCount1).to.equal(expected.callCount, `callCount #${marker}`);
            }
            // TODO: add value returned assertions if we find a way to test this more properly while keeping our sanity
          }
        }

        observer1.subscribe(subscriber1);
        observer1.subscribe(subscriber2);
        observer2.subscribe(subscriber3);
        observer2.subscribe(subscriber4);


        PLATFORM.requestAnimationFrame(() => {
          obj1.foo = obj2.foo = frameCount + 1;

          expect(callCount1).to.equal(0);
          expect(callCount2).to.equal(0);
          expect(callCount3).to.equal(0);
          expect(callCount4).to.equal(0);
          PLATFORM.requestAnimationFrame(() => {
            obj1.foo = obj2.foo = ++frameCount + 1;
            verifyCalled(2);
            PLATFORM.requestAnimationFrame(() => {
              obj1.foo = obj2.foo = ++frameCount + 1;
              verifyCalled(3);
              PLATFORM.requestAnimationFrame(() => {
                obj1.foo = obj2.foo = ++frameCount + 1;
                verifyCalled(4);
                PLATFORM.requestAnimationFrame(() => {
                  obj1.foo = obj2.foo = ++frameCount + 1;
                  verifyCalled(5);
                  PLATFORM.requestAnimationFrame(() => {
                    obj1.foo = obj2.foo = ++frameCount + 1;
                    verifyCalled(6);
                    PLATFORM.requestAnimationFrame(() => {
                      obj1.foo = obj2.foo = ++frameCount + 1;
                      verifyCalled(7);
                      observer1.unsubscribe(subscriber1);
                      observer1.unsubscribe(subscriber2);
                      observer2.unsubscribe(subscriber3);
                      observer2.unsubscribe(subscriber4);
                      done();
                    });
                  });
                });
              });
            });
          });
        });
      });
    }
  }

  it('does nothing if disabled', function(done) {
    const framesPerCheck: number = 1;
    DirtyCheckSettings.framesPerCheck = framesPerCheck;
    DirtyCheckSettings.disabled = true;
    const { dirtyChecker } = setup();

    const obj = { foo: '0' };
    const observer = dirtyChecker.createProperty(obj, 'foo');

    let callCount: number = 0;
    const subscriber = {
      handleChange() {
        ++callCount;
      }
    };

    observer.subscribe(subscriber);

    obj.foo = `1`;

    expect(callCount).to.equal(0);

    PLATFORM.requestAnimationFrame(() => {
      expect(callCount).to.equal(0);
      PLATFORM.requestAnimationFrame(() => {
        expect(callCount).to.equal(0);
        PLATFORM.requestAnimationFrame(() => {
          expect(callCount).to.equal(0);
          PLATFORM.requestAnimationFrame(() => {
            expect(callCount).to.equal(0);
            PLATFORM.requestAnimationFrame(() => {
              expect(callCount).to.equal(0);
              observer.unsubscribe(subscriber);
              done();
            });
          });
        });
      });
    });
  });

  it('throws on property creation if configured', function() {
    DirtyCheckSettings.throw = true;
    const { dirtyChecker } = setup();

    const obj = { foo: '0' };
    let err;
    try {
      dirtyChecker.createProperty(obj, 'foo');
    } catch (e) {
      err = e;
    }
    expect(err.message).to.match(/800/);
  });

  it('warns by default', function() {
    let warnCalled = false;
    const writeBackup = Reporter.write;
    Reporter.write = function(code) {
      if (code === 801) {
        warnCalled = true;
      }
    }
    const { dirtyChecker } = setup();

    const obj = { foo: '0' };
    dirtyChecker.createProperty(obj, 'foo');
    expect(warnCalled).to.equal(true);
    Reporter.write = writeBackup;
  });

  it('does not warn if warn is off', function() {
    let warnCalled = false;
    DirtyCheckSettings.warn = false;
    const writeBackup = Reporter.write;
    Reporter.write = function(code) {
      if (code === 801) {
        warnCalled = true;
      }
    }
    const { dirtyChecker } = setup();

    const obj = { foo: '0' };
    dirtyChecker.createProperty(obj, 'foo');
    expect(warnCalled).to.equal(false);
    Reporter.write = writeBackup;
  });
});
