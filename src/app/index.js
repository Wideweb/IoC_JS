import $ from 'jquery';

import Home from './components/home/home';
import Navigation from './components/navigation/navigation';

import JobService from './services/job.service';
import HttpService from './services/http.service';

import container from './infrastructure/ioc.container';


container.register('home').as(Home);
container.register('navigation').as(new Navigation());
container.register('jobService').as(JobService);
container.register('httpService').as(HttpService);


container.resolve('home').render($('#container'));

