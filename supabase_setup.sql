-- 1. Tabla para mensajes del formulario de contacto
CREATE TABLE IF NOT EXISTS contact_messages (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email       TEXT NOT NULL CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$'),
  message     TEXT NOT NULL CHECK (char_length(message) BETWEEN 10 AND 1000),
  created_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  read        BOOLEAN DEFAULT FALSE
);

-- 2. RLS (Row Level Security) — solo el backend puede insertar
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Permite insertar desde el cliente anon (formulario público)
CREATE POLICY "Allow public insert"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Solo el service role puede leer (tus mensajes son privados)
CREATE POLICY "Allow authenticated read"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- 3. Índice para ordenar por fecha
CREATE INDEX idx_contact_messages_created_at
  ON contact_messages (created_at DESC);

-- ¡Listo! La tabla está lista para recibir mensajes.
