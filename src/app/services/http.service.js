import $ from 'jquery';

class HttpService {
	get(url, params) {
		return $.ajax({
			url: url,
			type: 'GET',
			headers: {},
			data: params,
			dataType: 'json'
		});
	}
}

export default HttpService;