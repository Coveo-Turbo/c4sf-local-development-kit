import { Component, ComponentOptions, IResultLinkOptions, IResultsComponentBindings, load } from 'coveo-search-ui';
import { lazyDependentComponent } from '@coveops/turbo-core';

export interface ISalesforceResultLinkOptions extends IResultLinkOptions {}

@lazyDependentComponent('ResultLink')
export class SalesforceResultLink extends Component {
    static ID = 'SalesforceResultLink';
    static options: ISalesforceResultLinkOptions = {};

    constructor(public element: HTMLElement, public options: ISalesforceResultLinkOptions, public bindings: IResultsComponentBindings) {
        super(element, SalesforceResultLink.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, SalesforceResultLink, options);
        load("ResultLink").then(() => this.build(element, options, bindings))
    }

    public build(element, options, bindings) {
        return new Coveo.ResultLink(element, options, bindings);
    }
}