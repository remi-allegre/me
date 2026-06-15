-- Run this in the Neon SQL editor (console) once to create the tables,
-- then run seed.sql to load the data scraped from iamreal.fyi.
-- Afterwards you manage data directly in the Neon console; rebuild the
-- site to publish changes.

CREATE TABLE IF NOT EXISTS books (
  id          SERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  author      TEXT,
  language    TEXT,                          -- e.g. 'English', 'French'
  status      TEXT NOT NULL DEFAULT 'read', -- 'read' | 'reading' | 'to-read' | 'purchased'
  finished_at DATE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS races (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  race_date   DATE,
  distance    TEXT,        -- e.g. '10K', 'Half', 'Marathon'
  time        TEXT,        -- e.g. '3:45:21'
  location    TEXT,
  strava_link TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
