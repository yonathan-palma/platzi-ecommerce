import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={8}
    width={280}
    height={380}
    viewBox='0 0 280 380'
    className=' w-full'
    backgroundColor='#f7f7f7'
    foregroundColor='#e0e0e0'
    {...props}
  >
    <rect x='42' y='386' rx='0' ry='0' width='59' height='6' />
    <rect x='0' y='0' rx='0' ry='0' width='280' height='320' />
    <rect x='-1' y='333' rx='0' ry='0' width='281' height='10' />
    <rect x='-1' y='356' rx='0' ry='0' width='137' height='10' />
  </ContentLoader>
);

export default MyLoader;
