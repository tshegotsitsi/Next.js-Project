import Link from 'next/link';
import Image from 'next/image';

import classes from './posts-item.module.css';

function PostItem(props) {
    const { title, image, excerpt, date, slug } = props.post;

    // Formatting the date
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <li className={classes.post}>
            <Link href={`/posts/${slug}`} passHref>
             
                    <div className={classes.image}>
                        <Image src={`/images/posts/${slug}/${image}`} alt={title} width={300} height={200} />
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
             
            </Link>
        </li>
    );
}

export default PostItem;
