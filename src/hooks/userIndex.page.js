import { useState } from 'react';

export function useIndex(){
    const [text, setText] = useState('');
        const maxLength = 125;
        const [tweetList, setTweetList] = useState([])
    
        const tweet = {
            date: new Date(),
            text: text,
            user: {
                name: 'Álefh Lima',
                username: '@alefhlima',
                picture: 'https://github.com/alefhbr123.png'
            }
        }
    
        function sendTweet(event) {
            setTweetList([...tweetList, tweet])
        }
    
        function onTextChange(event){
            const text = event.target.value;
            if (text.length <= maxLength){
                setText(text);
            }
        }

        return {
            text,
            onTextChange,
            maxLength,
            sendTweet,
            tweetList
        }
}