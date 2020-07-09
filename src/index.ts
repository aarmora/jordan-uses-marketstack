import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

(async () => {
	// await basicEod('AAPL');

	// await basicEod('LNVGY');

	// await eodLatest('AAPL');

	// await eodWithDateRange('AAPL', '2020-01-04', '2020-01-31');

	// await tickers('MSFT');

	await tickers('LNVGY');

	// await exchanges();


})();

async function basicEod(symbol: string) {
	const baseUrl = `http://api.marketstack.com/v1/eod?access_key=${process.env.marketStackApiKey}`;

	// Call for apple stock eod of day
	const axiosResponse = await axios.get(`${baseUrl}&symbols=${symbol}`);

	/**
	 * Example API response
	 * {
			"pagination": {
				"limit": 100,
				"offset": 0,
				"count": 100,
				"total": 9944
			},
			"data": [
				{
					"date": "2020-05-21T00:00:00+0000",
					"symbol": "AAPL",
					"exchange": "XNAS",
					"open": 318.66,
					"high": 320.89,
					"low": 315.87,
					"close": 316.85,
					"volume": 25672211.0,
					"adj_open": 318.66,
					"adj_high": 320.89,
					"adj_low": 315.87,
					"adj_close": 316.85,
					"adj_volume": 25672211.0
				},
				[...]
			]
		}
	 */
	const appleData = axiosResponse.data;

	console.log('Apple data from basic EOD call', appleData.data.length, appleData.data[12], appleData.pagination);

	return axiosResponse.data;

}

async function eodLatest(symbol: string) {
	const baseUrl = `http://api.marketstack.com/v1/eod/latest?access_key=${process.env.marketStackApiKey}`;

	// Call for apple stock eod of day
	const axiosResponse = await axios.get(`${baseUrl}&symbols=${symbol}`);

	/**
	 * Example API response
	 * {
			"pagination": {
				"limit": 100,
				"offset": 0,
				"count": 100,
				"total": 9944
			},
			"data": [
				{
					"date": "2020-05-21T00:00:00+0000",
					"symbol": "AAPL",
					"exchange": "XNAS",
					"open": 318.66,
					"high": 320.89,
					"low": 315.87,
					"close": 316.85,
					"volume": 25672211.0,
					"adj_open": 318.66,
					"adj_high": 320.89,
					"adj_low": 315.87,
					"adj_close": 316.85,
					"adj_volume": 25672211.0
				},
				[...]
			]
		}
	 */
	const appleData = axiosResponse.data;

	console.log('Apple data from latest', appleData.data.length, appleData.data[0], appleData.pagination);

	return axiosResponse.data;

}

async function eodWithDateRange(symbol: string, startDate: string, endDate: string) {
	const url = `http://api.marketstack.com/v1/eod?access_key=${process.env.marketStackApiKey}&symbols=${symbol}&date_from=${startDate}&date_to=${endDate}`;

	// Call for apple stock eod of day
	const axiosResponse = await axios.get(url);

	/**
	 * Example API response
	 * {
			"pagination": {
				"limit": 100,
				"offset": 0,
				"count": 100,
				"total": 136785
			},
			"data": [
				{
					"name": "MICROSOFT CORP",
					"symbol": "MSFT",
					"stock_exchange": {
						"name": "NASDAQ Stock Exchange",
						"acronym": "NASDAQ",
						"mic": "XNAS",
						"country": "USA",
						"country_code": "US",
						"city": "New York",
						"website": "www.nasdaq.com",
						"timezone": {
							"timezone": "America/New_York",
							"abbr": "EST",
							"abbr_dst": "EDT"
						}
					}
				},
				[...]
			]
		}
	 */
	const appleData = axiosResponse.data;

	console.log('Apple data from EOD specific date', appleData.length, appleData.data[0], 'pagination', appleData.pagination);

	return axiosResponse.data;

}

async function tickers(symbol: string) {
	const url = `http://api.marketstack.com/v1/tickers/${symbol}?access_key=${process.env.marketStackApiKey}`;

	// Call for apple stock ticker
	const axiosResponse = await axios.get(url);

	/**
	 * Example API response
	 * {
			name: 'Microsoft Corp',
			symbol: 'MSFT',
			has_intraday: false,
			has_eod: true,
			stock_exchange: {
				name: 'NASDAQ Stock Exchange',
				acronym: 'NASDAQ',
				mic: 'XNAS',
				country: 'USA',
				country_code: 'US',
				city: 'New York',
				website: 'www.nasdaq.com',
				timezone: { timezone: 'America/New_York', abbr: 'EST', abbr_dst: 'EDT' },
				currency: { code: 'USD', symbol: '$', name: 'US Dollar' }
			}
		}
	 */

	const tickerData = axiosResponse.data;


	console.log(`${symbol} data from ticker`, tickerData);

}

async function exchanges() {
	const url = `http://api.marketstack.com/v1/exchanges?access_key=${process.env.marketStackApiKey}`;

	// Call for apple stock ticker
	const axiosResponse = await axios.get(url);

	/**
	 * Example API response
	 * 
	 * {
			"pagination": {
				"limit": 100,
				"offset": 0,
				"count": 71,
				"total": 71
			},
			"data": [
				{
					"name": "NASDAQ Stock Exchange",
					"acronym": "NASDAQ",
					"mic": "XNAS",
					"country": "USA",
					"country_code": "US",
					"city": "New York",
					"website": "www.nasdaq.com",
					"timezone": {
						"timezone": "America/New_York",
						"abbr": "EST",
						"abbr_dst": "EDT"
					}
				},
				[...]
			]
		}
	 */

	const exchangesData = axiosResponse.data;


	console.log(`Data from exchanges`, exchangesData.data.length, exchangesData.data[0], 'Pagination', exchangesData.pagination);

}