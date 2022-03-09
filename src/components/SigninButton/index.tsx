import React from 'react';
import {FaGithub} from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import  { signIn, signOut ,useSession }  from 'next-auth/react';

import styles from './styles.module.scss';

export function SigninButton() {
    const {data: session} = useSession<any>();

    console.log(session);

    return session ? (
        <button 
        type="button"
        className={styles.signinButton}
        onClick={() => signOut()}
        >
            <FaGithub color="#04d361"/>
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
        type="button"
        className={styles.signinButton}
        onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417"/>
            Sign with Github
        </button> 
    )
}