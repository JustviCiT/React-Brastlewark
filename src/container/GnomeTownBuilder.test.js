import React from "react";
import SearchBar from '../components/SearchBar'
import Gnomes from '../components/Gnomes'
import GnomeTownBuilder from './GnomeTownBuilder'
import Enzyme, { shallow } from 'enzyme';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios", () => {
  const Brastlewark = {Brastlewark: [
    {thumbnail: "Test Gnome 1" }, {thumbnail: "Test Gnome 2" }
  ]};
  
  return {
    get: jest.fn(() => Promise.resolve(Brastlewark)),
  };
});

const axios = require('axios');

it("fetch gnomes from componentDidMount", async () => {
	const app = shallow(<GnomeTownBuilder />);

	setTimeout(() => {
        app.instance()
		.componentDidMount()
		.then(() => {
			expect(axios.get).toHaveBeenCalled();
			expect(app.state()).toHaveProperty('townGnomes', Brastlewark);
		done();
		});
    }, 1000);
	
});

it("Click img and show detail", async () => {
	const app = shallow(<GnomeTownBuilder />);

	setTimeout(() => {
		const first = app.find('closed').first();
		app.find('img').first().simulate('click');
        expect(!first.hasClass);
    }, 1000);
	
});

it("Search and get state", async () => {
	const app = shallow(<GnomeTownBuilder />);

	setTimeout(() => {
		const value = 'test';
		const search = app.find('#site-search').simulate('change', {
			target: { value: value }
		});
        expect(app.state()).toHaveProperty('search', value);
    }, 1000);
	
});


