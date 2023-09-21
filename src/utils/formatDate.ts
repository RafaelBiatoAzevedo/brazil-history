import {ptBR} from 'date-fns/locale';
import {format, isDate} from 'date-fns';

export function formatDate(date: Date, withHours = true): string {
  return format(
    isDate(date) ? date : new Date(date),
    `dd/MM/yyyy${withHours ? ' HH:mm' : ''}`,
    {
      locale: ptBR,
    },
  );
}

export function formatHours(date: Date): string {
  return format(isDate(date) ? date : new Date(date), 'HH:mm', {
    locale: ptBR,
  });
}
