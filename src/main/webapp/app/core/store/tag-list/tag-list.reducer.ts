import { createSelector } from 'reselect';

import { actions, EntityAction } from '../entity/entity.actions';
import { initialTagList } from './tag-list.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as functions from '../slice/slice.functions';
import { typeFor } from '../util';
import { TagList } from './tag-list.model';

export function reducer(state = initialTagList(),
    action: EntityAction<TagList>): TagList {

    switch (action.type) {
        case typeFor(slices.TAG_LIST, actions.LOAD_ALL_SUCCESS):
            return functions.loadSuccess(state, <any>action);
        default:
            return state;
    }
};
