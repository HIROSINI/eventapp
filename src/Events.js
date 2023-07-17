import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const DirectChatPage = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
		<ChatEngine
			height='100vh'
			userName='Hirosini'
			userSecret='AMMUammu$200'
			projectID='65be4b36-67f9-4bd7-8920-ac9bc9c37af8'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default DirectChatPage;

{/* <img src="https://static.vecteezy.com/system/resources/previews/000/542/587/original/abstract-blue-background-in-premium-indian-style-template-design-for-cover-business-presentation-web-banner-wedding-invitation-and-luxury-packaging-vector-illustration-with-golden-border.jpg" width={1300} height={650} style={{marginLeft:"130px"}}></img> */}