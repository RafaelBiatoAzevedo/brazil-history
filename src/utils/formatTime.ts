import {format, isDate} from 'date-fns';
import {ptBR} from 'date-fns/locale';

export function formatTime(date: Date): string | undefined {
  if (!date || !isDate(date)) return undefined;

  return format(date, 'HH:mm', {locale: ptBR});
}
