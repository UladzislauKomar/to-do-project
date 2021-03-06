import types from '../actions/types';
import * as toDoService from '../services/toDoService';
import ToDo from '../models/ToDo';
import { Dispatch } from 'react';
import { Action } from 'redux';

export interface IAction extends Action {
  type: string;
  payload?: ToDo[];
  errorMessage?: string;
}

const requestAddItem: () => IAction = () => {
  return {
    type: types.ADD_ITEM_REQUEST
  };
};

const receiveAddItem: (items: ToDo[]) => IAction = (items) => {
  return {
    type: types.ADD_ITEM_SUCCESS,
    payload: items
  };
};

const addItemError: (errorMessage: string) => IAction = (errorMessage) => {
  return {
    type: types.ADD_ITEM_FAILURE,
    errorMessage: errorMessage
  };
};

const requestGetItems: () => IAction  = () => {
  return {
    type: types.GET_ITEMS_REQUEST
  };
};

const receiveGetItems: (items: ToDo[]) => IAction = (items) => {
  return {
    type: types.GET_ITEMS_SUCCESS,
    payload: items
  };
};

const getItemsError: (errorMessage: string) => IAction = (errorMessage) => {
  return {
    type: types.GET_ITEMS_FAILURE,
    errorMessage: errorMessage
  };
};

const requestRemoveItem: () => IAction  = () => {
  return {
    type: types.REMOVE_ITEMS_REQUEST
  };
};

const receiveRemoveItem: (items: ToDo[]) => IAction = (items) => {
  return {
    type: types.REMOVE_ITEMS_SUCCESS,
    payload: items
  };
};

const removeItemError: (errorMessage: string) => IAction = (errorMessage) => {
  return {
    type: types.REMOVE_ITEMS_FAILURE,
    errorMessage: errorMessage
  };
};

const requestUpdateItem: () => IAction  = () => {
  return {
    type: types.UPDATE_ITEM_REQUEST
  };
};

const receiveUpdateItem: (items: ToDo[]) => IAction = (items) => {
  return {
    type: types.UPDATE_ITEM_SUCCESS,
    payload: items
  };
};

const updateItemError: (errorMessage: string) => IAction = (errorMessage) => {
  return {
    type: types.UPDATE_ITEM_FAILURE,
    errorMessage: errorMessage
  };
};

export const addItem = (item: ToDo) => async (dispatch: Dispatch<IAction>) => {
  try {
    dispatch(requestAddItem());
    const items = await toDoService.addItem(item);
    dispatch(receiveAddItem(items));
  }
  catch (error) {
    dispatch(addItemError((error as Error).message));
  }
};

export const removeItem = (item: ToDo) => async (dispatch: Dispatch<IAction>) => {
  try {
    dispatch(requestRemoveItem());
    const items = await toDoService.removeItem(item);
    dispatch(receiveRemoveItem(items));
  }
  catch (error) {
    dispatch(removeItemError((error as Error).message));
  }
};

export const getItems = () => async (dispatch: Dispatch<IAction>) => {
  try {
    dispatch(requestGetItems());
    const items = await toDoService.getItems();
    dispatch(receiveGetItems(items));
  }
  catch (error) {
    dispatch(getItemsError((error as Error).message));
  }
};

export const updateItem = (item: ToDo) => async (dispatch: Dispatch<IAction>) => {
  try {
    dispatch(requestUpdateItem());
    const items = await toDoService.updateItem(item);
    dispatch(receiveUpdateItem(items));
  }
  catch (error) {
    dispatch(updateItemError((error as Error).message));
  }
};
