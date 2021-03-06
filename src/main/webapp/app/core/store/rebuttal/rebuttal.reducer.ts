import { Observable } from 'rxjs/Observable';

import { Rebuttal, initialRebuttal } from './rebuttal.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as functions from '../entity/entity.functions';
import { typeFor } from '../util';
import { actions, EntityAction } from '../entity/entity.actions';

export function reducer(state: Entities<Rebuttal> = initialEntities<Rebuttal>({},
    slices.REBUTTAL, actions, initialRebuttal), action: EntityAction<Rebuttal>): Entities<Rebuttal> {

    switch (action.type) {
        case typeFor(slices.REBUTTAL, actions.ADD_SUCCESS):
            return functions.addSuccess<Rebuttal>(state, <any>action);
        case typeFor(slices.REBUTTAL, actions.ADD_TEMP):
        case typeFor(slices.REBUTTAL, actions.LOAD_SUCCESS):
            return functions.addToStore<Rebuttal>(state, <any>action);
        case typeFor(slices.REBUTTAL, actions.UPDATE):
        case typeFor(slices.REBUTTAL, actions.PATCH):
            return functions.update<Rebuttal>(state, <any>action);
        case typeFor(slices.REBUTTAL, actions.DELETE_TEMP):
            return functions.deleteTemp<Rebuttal>(state, <any>action);
        default: {
            return state;
        }
    }
    // checkout https://github.com/omnidan/redux-undo for undo features

}

export const getEntities = (state: Entities<Rebuttal>) => {
    return state.entities;
};

export const getIds = (state: Entities<Rebuttal>) => state.ids;
