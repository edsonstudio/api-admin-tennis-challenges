import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { JogadorSchema } from './interfaces/jogadores/jogador.schema';
import { CategoriaSchema } from './interfaces/categorias/categoria.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://edsonstudio:rud6JHpd8oqJJukV@cluster0.d8g8xgw.mongodb.net/admintennischallenges'),
    MongooseModule.forFeature([
      { name: 'Jogador', schema: JogadorSchema},
      { name: 'Categoria', schema: CategoriaSchema }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
