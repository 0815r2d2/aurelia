import { ICompiledViewSource } from "./runtime/templating/view-engine";

//extracted from view imports
import * as import1 from "./name-tag";

//this object is built up during compilation
export const appConfig: ICompiledViewSource = {
  name: 'app',
  dependencies: [
    import1
  ],
  template: `
    <au-marker class="au"></au-marker> <br>
    <input type="text" class="au">
    <name-tag class="au">
      <au-content>
        <h2>Message: <au-marker class="au"></au-marker> </h2>
      </au-content>
    </name-tag>
    <input type="checkbox" class="au" />
    <au-marker class="au"></au-marker>
    <au-marker class="au"></au-marker>
  `,
  targetInstructions: [
    [
      {
        type: 'oneWayText',
        source: 'message'
      }
    ],
    [
      {
        type: 'twoWay',
        source: 'message',
        target: 'value'
      }
    ],
    [
      {
        type: 'element',
        resource: 'name-tag',
        instructions: [
          {
            type: 'twoWay',
            source: 'message',
            target: 'name'
          },
          {
            type: 'ref',
            source: 'nameTag'
          }
        ]
      }
    ],
    [
      {
        type: 'oneWayText',
        source: 'message'
      }
    ],
    [
      {
        type: 'twoWay',
        source: 'duplicateMessage',
        target: 'checked'
      }
    ],
    [
      {
        type: 'templateController',
        resource: 'if',
        config: {
          template: `<div><au-marker class="au"></au-marker> </div>`,
          targetInstructions: [
            [
              {
                type: 'oneWayText',
                source: 'message'
              }
            ]
          ]
        },
        instructions: [
          {
            type: 'oneWay',
            source: 'duplicateMessage',
            target: 'condition'
          }
        ]
      }
    ],
    [
      {
        type: 'templateController',
        resource: 'else',
        link: true,
        config: {
          template: `<div>No Message Duplicated</div>`,
          targetInstructions: []
        },
        instructions: []
      }
    ]
  ],
  surrogateInstructions: []
};
