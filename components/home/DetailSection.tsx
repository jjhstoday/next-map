import React, { useState } from 'react';
import styles from '../../styles/detail.module.scss';
import useSWR from 'swr';
import { CURRENT_STORE_KEY } from '../../hooks/useCurrentStore';
import { Store } from '../../types/store';
import DetailContent from './DetailContent';
import DetailHeader from './DetailHeader';

function DetailSection() {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.detailSection} ${currentStore ? styles.selected : ''} ${
        expanded ? styles.expanded : ''
      }`}
    >
      <DetailHeader
        expanded={expanded}
        currentStore={currentStore}
        onClickArrow={() => setExpanded(!expanded)}
      />
      <DetailContent currentStore={currentStore} expanded={expanded} />
    </div>
  );
}

export default DetailSection;
