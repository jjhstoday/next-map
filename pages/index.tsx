import Link from 'next/link';
import Header from '../components/common/Header';
import styles from '../styles/header.module.scss';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import MapSection from '../components/home/MapSection';
import { Store } from '../types/store';
import useStores from '../hooks/useStores';
import { useEffect } from 'react';

interface Props {
  stores: Store[];
}

export default function Home({ stores }: Props) {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <Header
        rightElements={[
          <button className={styles.box} style={{ marginRight: 8 }} key='button'>
            <AiOutlineShareAlt size={20} color='#444444' />
          </button>,
          <Link href='/feedback' className={styles.box} key='link'>
            <VscFeedback size={20} color='#444444' />
          </Link>,
        ]}
      />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <MapSection />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const stores = (await import('../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
