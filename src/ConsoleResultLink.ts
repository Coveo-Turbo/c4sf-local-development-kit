import { Component, ComponentOptions, IResultLinkOptions, IResultsComponentBindings, load } from 'coveo-search-ui';
import { lazyDependentComponent } from '@coveops/turbo-core';

export interface IConsoleResultLinkOptions extends IResultLinkOptions {}

@lazyDependentComponent('ResultLink')
export class ConsoleResultLink extends Component {
    static ID = 'ConsoleResultLink';
    static options: IConsoleResultLinkOptions = {};

    constructor(public element: HTMLElement, public options: IConsoleResultLinkOptions, public bindings: IResultsComponentBindings) {
        super(element, ConsoleResultLink.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, ConsoleResultLink, options);
        load("ResultLink").then(() => this.build(element, options, bindings))
    }

    public build(element, options, bindings) {
        return new Coveo.ResultLink(element, options, bindings);
    }
}