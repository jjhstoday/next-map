import React from 'react';
import styles from '../../styles/detail.module.scss';
import { Store } from '../../types/store';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineShareAlt } from 'react-icons/ai';
import copy from 'copy-to-clipboard';
import headerStyles from '../../styles/header.module.scss';

interface Props {
  currentStore?: Store;
  expanded: boolean;
  onClickArrow: () => void;
}

function DetailHeader({ currentStore, expanded, onClickArrow }: Props) {
  return (
    <div className={styles.header}>
      <button
        className={`${styles.arrowButton} ${expanded ? styles.expanded : ''}`}
        onClick={onClickArrow}
        disabled={!currentStore}
        aria-label={expanded ? '매장 정보 접기' : '매장 정보 펼치기'}
      >
        <IoIosArrowUp size={20} color='#666666' />
      </button>
      {!currentStore && <p className={styles.title}>매장을 선택해주세요</p>}
      {currentStore && (
        <div className={styles.flexRow}>
          <p className={styles.title}>{currentStore.name}</p>
          <button
            className={headerStyles.box}
            onClick={() => {
              copy(location.origin + '/' + currentStore.name);
            }}
            aria-label='매장 페이지 주소 클립보드 복사'
          >
            <AiOutlineShareAlt size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default DetailHeader;
