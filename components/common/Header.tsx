import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';

interface Props {
  onClickLogo?: () => void;
  rightElements?: React.ReactElement[];
}

function Header({ onClickLogo, rightElements }: Props) {
  return (
    <header className={styles.header}>
      <div className={`${styles.flexItem} ${styles.customLogo}`}>
        <Link href='/' className={styles.box} onClick={onClickLogo} aria-label='홈으로 이동'>
          <Image src='/logo.png' width={64} height={58} alt='로고' priority />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
}

export default Header;
