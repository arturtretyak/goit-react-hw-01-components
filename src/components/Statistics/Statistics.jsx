import css from './Statistics.module.css';
import { getRandomHexColor } from 'tools/random-color';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : false}

      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }, index) => {
          return (
            <li
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
              className={css.item}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
