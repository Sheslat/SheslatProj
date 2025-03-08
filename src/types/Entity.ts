import { type Bestia } from '@/modules/bestia/domain/Bestia'
import { type Cultura } from '@/modules/cultura/domain/Cultura'
import { type Evento } from '@/modules/evento/domain/Evento'
import { type Lugar } from '@/modules/lugar/domain/Lugar'
import { type Pais } from '@/modules/pais/domain/Pais'
import { type Personaje } from '@/modules/personaje/domain/Personaje'
import { type Raza } from '@/modules/raza/domain/Raza'

export type Entity = Cultura | Personaje | Pais | Lugar | Evento | Raza | Bestia
