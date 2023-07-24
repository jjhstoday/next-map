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
      <div className={styles.flexItem}>
        <Link href='/' className={styles.box} onClick={onClickLogo}>
          <Image src='/logo.png' width={110} height={30} alt='로고' />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
}

export default Header;
