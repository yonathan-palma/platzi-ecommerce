import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

const CatalogMagic = ({
  width = 1366,
  heading = { width: 140, height: 24 },
  row = 2,
  column = 5,
  padding = 12,
  borderRadius = 4,
  ...props
}) => {
  const list = [];

  let height;

  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < column; j++) {
      const itemWidth = (width - padding * (column + 1)) / column;

      const x = padding + j * (itemWidth + padding);

      const height1 = itemWidth;

      const height2 = 20;

      const height3 = 20;

      const space =
        padding + height1 + (padding / 2 + height2) + height3 + padding * 4;

      const y1 = padding + heading.height + padding * 2 + space * (i - 1);

      const y2 = y1 + padding + height1;

      const y3 = y2 + padding / 2 + height2;

      list.push(
        <>
          <rect
            x={x}
            y={y1}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth}
            height={height1}
          />
          <rect x={x} y={y2} rx={0} ry={0} width={itemWidth} height={height2} />
          <rect
            x={x}
            y={y3}
            rx={0}
            ry={0}
            width={itemWidth * 0.6}
            height={height3}
          />
        </>
      );

      if (i === row) {
        height = y3 + height3;
      }
    }
  }

  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      // className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'
      {...props}
    >
      {list}
    </ContentLoader>
  );
};

CatalogMagic.metadata = {
  name: 'I am Doong - I come from Việt Nam',
  github: 'toiladoong',
  description: 'CatalogMagic',
  filename: 'CatalogMagic',
};

CatalogMagic.propTypes = {
  width: PropTypes.number,
  heading: PropTypes.object,
  row: PropTypes.number,
  column: PropTypes.number,
  padding: PropTypes.number,
  borderRadius: PropTypes.number,
};

export default CatalogMagic;
