import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController, CrudRequest, GetManyDefaultResponse } from '@nestjsx/crud'
import { Setting } from './entity/setting.entity';
import { SettingsService } from './settings.service';


@Crud({
    model: {
        type: Setting
    }
})

@Controller('settings')
export class SettingsController implements CrudController<Setting> {
    constructor( 
        public service: SettingsService) {

    }
     
}