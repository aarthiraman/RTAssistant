import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import './Interests.css';

export default class Interests extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tags: [],
			suggestions: [
				'Chennai', 
				'Ooty', 
				'Kodaikanal', 
				'Madurai', 
				'Trichy', 
				'Pondicherry', 
				'Bangalore'
			]
		};
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAddition = this.handleAddition.bind(this);
		this.handleDrag = this.handleDrag.bind(this);
	}

	handleDelete(i) {
		let tags = this.state.tags;
		tags.splice(i, 1);
		this.setState({tags: tags});
	}

	handleAddition(tag) {
		let tags = this.state.tags;
		tags.push({
			id: tags.length + 1,
			text: tag
		});
		this.setState({tags: tags});
	}

	handleDrag(tag, currPos, newPos) {
		let tags = this.state.tags;

		// mutate array
		tags.splice(currPos, 1);
		tags.splice(newPos, 0, tag);

		// re-render
		this.setState({ tags: tags });
	}

	render() {
		console.log(this.props);
		const { onDone } = this.props;
		const { tags, suggestions } = this.state;
		return (
			<div>
				<div class="grid">
					<div class="cell">
						<h2>Any specific places you are interested in</h2>
						<ReactTags tags={tags}
							suggestions={suggestions}
							handleDelete={this.handleDelete}
							handleAddition={this.handleAddition}
							handleDrag={this.handleDrag} />

						<button onClick={() => onDone()} className="done">I am done now</button>
					</div>
				</div>
			</div>
		);
	}
}

