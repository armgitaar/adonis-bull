/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Bull from '@ioc:Rocketseat/Bull'

const PORT = 9999

Bull.process()

Bull.ui(PORT)

