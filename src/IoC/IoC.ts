import { HttpMock } from './../_mocks/HttpMock';
import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";  
import { TYPES } from "IoC/TYPES";

import { ISnackBarService } from 'services/snackbar/ISnackBarService';
import { ISnackBarServiceEngine } from './../services/snackbar/ISnackBarServiceEngine';
import { SnackBarService } from 'services/snackbar/SnackBarService';
import { Http } from 'services/http/Http';
import { LocalStorage } from './../services/localStorage/LocalStoreService';
import { AuthService } from './../services/auth/AuthService';
import { CqrsBus } from './../services/cqrsBus/CqrsBusService';
import { Router } from "services/router/Router";
import { OrdersService } from './../services/orders/OrdersService';


const container = new Container();

const snackBarService = new SnackBarService();
container.bind<SnackBarService>(SnackBarService).toConstantValue(snackBarService); 
container.bind<ISnackBarService>(TYPES.ISnackBarService).toConstantValue(snackBarService); 
container.bind<ISnackBarServiceEngine>(TYPES.ISnackBarServiceEngine).toConstantValue(snackBarService); 
container.bind<Http>(Http).to(HttpMock); 
container.bind<CqrsBus>(CqrsBus).toSelf(); 
container.bind<AuthService>(AuthService).toSelf(); 
container.bind<LocalStorage>(LocalStorage).toSelf(); 
container.bind<Router>(Router).toSelf(); 
container.bind<OrdersService>(OrdersService).toSelf(); 

const LazyInject = getDecorators(container).lazyInject;

export { container, LazyInject };