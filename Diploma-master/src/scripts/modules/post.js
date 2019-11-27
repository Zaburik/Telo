const postEdit = () => {
	const posts = document.querySelectorAll('.news-post');
	const readMoreBtns = document.querySelectorAll('.news-post a');
	let postsPreserved = [];
	let postImgs = [];

	const trimPost = (index) => {
		let postParagraph = posts[index].querySelectorAll('p')[0];

		if(postParagraph.textContent.trim().split(' ').length > 50) {
			postParagraph.textContent = postParagraph.textContent.trim().split(' ').splice(0, 50).join(' ') + '...';
		}
	}

	const togglePost = (index) => {
		let postText = posts[index].querySelectorAll('p')[0];

		if(postText.textContent.trim().split(' ').length > 50) {
			trimPost(index);
			postImgs[index].style.display = '';
			readMoreBtns[index].textContent = 'читать далее';
			return;
		}

		postImgs[index].style.display = 'none';
		postText.textContent = postsPreserved[index];
		readMoreBtns[index].textContent = 'скрыть запись';
	}

	
	posts.forEach((post, index) => {
		let postParagraph = post.querySelectorAll('p')[0];
		let postImg = post.querySelector('img');

		postsPreserved.push(postParagraph.textContent);
		postImgs.push(postImg);
		
		trimPost(index);
	});

	readMoreBtns.forEach((item, index) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			togglePost(index);
		});
	});

}


export default postEdit;