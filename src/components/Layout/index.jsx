import PropTypes from 'prop-types';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export function Layout({ children }) {
  return <div className='flex flex-col mt-36 items-center'>{children}</div>;
}
