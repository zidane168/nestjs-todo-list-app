import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerService, LoggerOptions, LoggerTransport } from 'nest-logger';
import { MyLoggerService } from './my-logger.service';

@Module({

    providers: 
    [{
        provide: LoggerService,
        //useFactory: (config: ConfigService) => {
        useFactory: () => {
            // getLoggers() is a helper function to get configured console and/or rotate logger transports.
            // It takes takes two parameters:
            // 1: Appenders where to log to: console or rotate or both in array
            //    (eg. [LoggerTransport.CONSOLE, LoggerTransport.ROTATE])
            // 2: Logger options object that contains the following properties:
            //    timeFormat?: winston's time format syntax. Defaults to "HH:mm:ss".
            //    colorize?: whether to colorize the log output. Defaults to true.
            //    consoleOptions?: see Winston's ConsoleTransportOptions interface
            //    fileOptions?: see Winston Daily Rotate File's DailyRotateFile.DailyRotateFileTransportOptions
            const options: LoggerOptions = {
                fileOptions: {
                    // filename: `${config.logger.path}/${config.serviceName}-%DATE%.log`,
                    filename: `logs/%DATE%-system.log`,
                },
                colorize: true, //config.colorize,
            };

            const loggers = LoggerService.getLoggers(
                // [LoggerTransport.CONSOLE, LoggerTransport.ROTATE],
                [LoggerTransport.ROTATE],
                options,
            );

            // const myCustomLevels = {
            //     levels: {
            //       info: 0,
            //       warning: 1,
            //       error: 2,
            //       apocalypse: 3
            //     },
            //     colors: {
            //       info: 'blue',
            //       warning: 'green',
            //       error: 'yellow',
            //       apocalypse: 'red'
            //     }
            // };
            
            // LoggerService constructor will take two parameters:
            // 1. Log level: debug, info, warn or error
            // 2. List of logger transport objects.
            return new LoggerService(
                "info",         // config.logLevel, 
                loggers,
                // myCustomLevels
            );  
        }, 
    }, MyLoggerService],
    exports: [LoggerService],
    
})
export class MyLoggerModule {}
