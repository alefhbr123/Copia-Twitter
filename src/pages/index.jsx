import TextInput from "../components/TextInput";
import Tweet from "../components/Tweet";
import styles from '../pages/index.module.css'
import { useIndex } from '../hooks/userIndex.page';

export default function Index() {
    const {
        text,
        onTextChange,
        maxLength,
        sendTweet,
        tweetList
    } = useIndex();

    return (
        <div>
            <h1>CopiaTweet</h1>
        <div>
            <img src="https://github.com/alefhbr123.png" className={styles.avatar} />
            <TextInput 
                placeholder={'O que está acontecendo?'}
                maxLength={maxLength}
                value={text}
                onChange={onTextChange}
            />
        </div>
        <div>
            <div> {text.length} / {maxLength}</div>
            <button onClick={sendTweet}
            className={styles.postButton}
            disabled={text.length === 0}
            >Tweetar</button>
        </div>

        <ul className={styles.tweetList}>
        {tweetList.map(tweet => {
            return (
                <li className={styles.tweetListItem}><Tweet tweet={tweet} /></li>
            )
        })}
        </ul>

        </div>
    );
}