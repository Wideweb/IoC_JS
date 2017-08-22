import './home.scss';
import view from './home.view.html';

class HomeComponent {

	constructor(jobService) {
		this.jobService = jobService;
	}

	render(container) {
		container.append(view);
		this.jobService.getJobs().done((data) => container.append(`<h1>${data.name}</h1>`));
	}

}

HomeComponent.$inject = ['jobService'];

export default HomeComponent;