import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import DetailContent from '../components/home/DetailContent';
import DetailHeader from '../components/home/DetailHeader';
import type { Store } from '../types/store';
import styles from '../styles/detail.module.scss';
import { useRouter } from 'next/router';
import useCurrentStore from '../hooks/useCurrentStore';
import { NextSeo } from 'next-seo';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const expanded = true;

  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();

  const goToMap = () => {
    setCurrentStore(store);
    router.push(`/?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}`);
  };

  return (
    <>
      <NextSeo
        title={store.name}
        description='Next.js로 개발한 매장 상세 페이지입니다.'
        canonical={`https://next-map-phi.vercel.app/${store.name}`}
      />
      <div className={`${styles.detailSection} ${styles.selected} ${styles.expanded}`}>
        <DetailHeader expanded={expanded} currentStore={store} onClickArrow={goToMap} />
        <DetailContent currentStore={store} expanded={expanded} />
      </div>
    </>
  );
};

export default StoreDetail;

// 페이지 경로를 정적으로 생성
export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../public/stores.json')).default;
  const paths = stores.map(store => ({ params: { name: store.name } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../public/stores.json')).default;
  const store = stores.find(store => store.name === params?.name);

  return { props: { store } };
};
