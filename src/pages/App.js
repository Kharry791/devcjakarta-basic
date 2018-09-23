import React, {Component} from 'react';
import SearchBar from '../components/SearchBar'
import BlogList from "../components/BlogList";

const link = "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends Component {

	constructor() {
		super();

		this.state = {
			loading: true,
			blogs: [],
			blogsFiltered: [],
		}
	}

	componentDidMount() {
		this.handleGetBlog();
	}

	render() {
		if (this.state.loading === true) {
			return (
				<div>
					<SearchBar
						onChangeSearch={this.handleSearchBlog}
					/>
					<h1>
						Loading...
					</h1>
				</div>
			)
		} else {
			return (
				<div>
					<SearchBar
						onChangeSearch={this.handleSearchBlog}
					/>
					<BlogList
						data={this.state.blogsFiltered}
					/>
				</div>
			);
		}
	}

	handleSearchBlog = event => {
		this.setState({
			loading: true
		});

		const value = event.target.value;

		setTimeout(() => {
			const blogFiltered = this.state.blogs.filter(blog =>
				blog.title.toLowerCase().indexOf(value) > -1
			);

			this.setState({
				blogsFiltered: blogFiltered,
				loading: false
			});
		}, 2000);
	};

	handleGetBlog = () => {
		setTimeout(() => {
			fetch(link)
				.then(res => res.json())
				.then(res => {
						this.setState({
							blogs: res,
							blogsFiltered: res,
							loading: false
						})
					}
				)
		}, 2000);
	};
}

export default App;
