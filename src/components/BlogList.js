import React from 'react';

const style = {
		contentBlog: {
			padding: 10,
			backgroundColor: '#eeeeee',
		},
		contentBlogZonk: {
			padding: 10,
			backgroundColor: '#eeeeee',
			justifyContent: 'center',
			alignItems: 'center',
			display: 'flex',
		},
		contentList: {
			boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
			transition: '0.3s',
			borderRadius: 5,
			padding: 20,
			margin: 30,
			backgroundColor: 'white',
		},
		contentFooter: {
			marginTop: 50,
			padding: 5,
			color: 'white',
			borderRadius: 5,
			backgroundColor: '#b71c1c',
		}
	}
;

const BlogList = props => {
	if (props.data === undefined || props.data.length === 0) {
		return (
			<div style={style.contentBlogZonk}>
				<div>
					<h1>ZOONK</h1>
					<p>No Result Found</p>
				</div>
			</div>
		)
	} else {
		return (
			<div style={style.contentBlog}>
				{props.data.map((blog, index) => (
					<div key={index} style={style.contentList}>
						<h1>{index + 1}. {blog.title}</h1>
						<p>{blog.content}</p>
						<p style={style.contentFooter}>{blog.author} : {blog.created_at}</p>
					</div>
				))}
			</div>
		)
	}
};

export default BlogList;