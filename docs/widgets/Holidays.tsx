import { useEffect, useState } from 'react';
import styles from './Holidays.module.css';

type Division = 'england-and-wales' | 'scotland' | 'northern-ireland';

interface ApiEvent {
  title: string;
  date: string;
  notes?: string;
  bunting?: boolean;
}

type ApiData = Record<Division, { division: string; events: ApiEvent[] }>;

const messages = {
  en: {
    title: 'Upcoming holidays',
    loading: 'Loading…',
    error: 'Failed to load',
    none: 'No holidays found',
    prev: 'Prev',
    next: 'Next',
  },
  ru: {
    title: 'Ближайшие праздники',
    loading: 'Загрузка…',
    error: 'Не удалось загрузить',
    none: 'Праздников не найдено',
    prev: 'Назад',
    next: 'Далее',
  },
} as const;

interface HolidaysWidgetProps {
  division?: Division;
  limit?: number;
  locale?: 'en' | 'ru';
}

export default function HolidaysWidget({
  division = 'england-and-wales',
  limit = 5,
  locale = 'en',
}: HolidaysWidgetProps) {
  const [events, setEvents] = useState<ApiEvent[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const t = messages[locale] ?? messages.en;

  useEffect(() => {
    setPage(0);
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch('https://www.gov.uk/bank-holidays.json');
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data: ApiData = await res.json();
        const divisionData = data[division];

        if (!divisionData) {
          throw new Error(`Division "${division}" not found`);
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const upcomingEvents = divisionData.events.filter(
          (ev) => new Date(ev.date) >= today,
        );

        if (isMounted) {
          setEvents(upcomingEvents);
          setError(null);
        }
      } catch (e) {
        if (isMounted) {
          console.error('HolidaysWidget error:', e);
          setError(e instanceof Error ? e.message : 'Unknown error');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [division]);

  if (loading) {
    return <div className={styles.loading}>{t.loading}</div>;
  }

  if (error) {
    return <div className={styles.error}>{t.error}</div>;
  }

  if (!events.length) {
    return <div className={styles.empty}>{t.none}</div>;
  }

  const visibleEvents = events.slice(page * limit, (page + 1) * limit);
  const hasNext = (page + 1) * limit < events.length;
  const hasPrev = page > 0;

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{t.title}</h3>

      <ul className={styles.list}>
        {visibleEvents.map((ev) => {
          const date = new Date(ev.date);
          const month = date.toLocaleString(locale, { month: 'short' });
          const day = date.getDate();
          const weekday = date.toLocaleString(locale, { weekday: 'short' });
          const dateStr = `${day} ${month} ${date.getFullYear()}`;

          return (
            <li key={`${ev.date}-${ev.title}`} className={styles.item}>
              <div className={styles.dateWrapper}>
                <span className={styles.date}>{dateStr}</span>
                <span className={styles.weekday}>{weekday}</span>
              </div>
              <div className={styles.content}>
                <span className={styles.eventTitle}>{ev.title}</span>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.pagination}>
        <button
          type="button"
          className={styles.pageButton}
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={!hasPrev}
          aria-label={t.prev}
        >
          ← {t.prev}
        </button>
        <button
          type="button"
          className={styles.pageButton}
          onClick={() => setPage((p) => p + 1)}
          disabled={!hasNext}
          aria-label={t.next}
        >
          {t.next} →
        </button>
      </div>
    </div>
  );
}
