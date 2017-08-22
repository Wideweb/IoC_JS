import urls from '../constants/urls';

class JobService {

	constructor(httpService) {
		this.httpService = httpService;
	}

	getJobs() {
		return this.httpService.get(urls.jobs);
	}
}

JobService.$inject = ['httpService'];

export default JobService;