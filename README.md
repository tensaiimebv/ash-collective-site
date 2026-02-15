# ASH Collective Site

Сайт клана ASH Collective для Rust Mobile.

## Стек

- React + TypeScript + Vite
- Supabase Auth
- Tailwind CSS
- Vercel API function для отправки инвайтов по email

## Установка

```bash
npm install
```

## Переменные окружения

Скопируйте `.env.example` в `.env` и заполните значения.

```bash
# Frontend
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...

# Server (Vercel API)
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# Gmail SMTP
SMTP_GMAIL_USER=you@gmail.com
SMTP_GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx
SMTP_FROM_NAME=ASH Collective
```

## Настройка Supabase

1. Создайте проект в Supabase.
2. В SQL Editor выполните `supabase/schema.sql`.
3. Назначьте административную роль нужному пользователю:

```sql
update public.profiles set role = 'leader' where id = '<user-uuid>';
-- или
update public.profiles set role = 'deputy' where id = '<user-uuid>';
```

## Настройка Gmail (отправка писем с вашей почты)

1. Включите 2FA в Google-аккаунте.
2. Создайте App Password для "Mail".
3. Укажите:

- `SMTP_GMAIL_USER` — ваш Gmail
- `SMTP_GMAIL_APP_PASSWORD` — App Password (16 символов)
- `SMTP_FROM_NAME` — имя отправителя

Письма инвайта отправляются через API `POST /api/send-invite-email` и приходят именно с `SMTP_GMAIL_USER`.

## Инвайт-поток заявок

1. Админ нажимает "Отправить инвайт" в заявке.
2. Генерируется ссылка `/register?invite=...`.
3. API отправляет письмо кандидату через ваш Gmail.
4. Статус заявки меняется на `invited` только после успешной отправки.
5. После регистрации кандидата заявка переводится в `approved`.

## Локальный запуск

Обычный фронтенд:

```bash
npm run dev
```

Сборка:

```bash
npm run build
```

Важно: endpoint `/api/send-invite-email` является серверной функцией Vercel. Для полной локальной проверки отправки email используйте `vercel dev` или проверьте на деплое в Vercel.

## Деплой

```bash
vercel --prod
```

В Vercel Project Settings -> Environment Variables добавьте все серверные переменные (`SUPABASE_*`, `SMTP_*`).
