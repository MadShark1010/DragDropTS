/// <reference path="models/drag-drop-interfaces.ts" />
/// <reference path="models/project-model.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="utility/validation.ts" />
/// <reference path="decorators/autobind-decorator.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />


namespace App {

    new ProjectInput();
    new ProjectList('active');
    new ProjectList('finished');
}