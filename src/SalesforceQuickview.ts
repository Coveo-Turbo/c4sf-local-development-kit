import { Component, ComponentOptions, IQuickviewOptions, IResultsComponentBindings, load } from 'coveo-search-ui';
import { lazyDependentComponent } from '@coveops/turbo-core';

export interface ISalesforceQuickviewOptions extends IQuickviewOptions {}

@lazyDependentComponent('Quickview')
export class SalesforceQuickview extends Component {
    static ID = 'SalesforceQuickview';
    static options: ISalesforceQuickviewOptions = {};

    constructor(public element: HTMLElement, public options: ISalesforceQuickviewOptions, public bindings: IResultsComponentBindings) {
        super(element, SalesforceQuickview.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, SalesforceQuickview, options);
        load("Quickview").then(() => this.build(element, options, bindings))
    }

    public build(element, options, bindings) {
        return new Coveo.Quickview(element, options, bindings);
    }
}