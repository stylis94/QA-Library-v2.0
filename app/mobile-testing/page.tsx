'use client'

import { ArrowLeft, Smartphone, Lightbulb, ListChecks, Settings } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function MobileTestingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Мобильное тестирование
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Особенности, виды, инструменты и практические советы
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="types">Виды тестирования</TabsTrigger>
            <TabsTrigger value="platforms">Платформы</TabsTrigger>
            <TabsTrigger value="tools">Инструменты</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Что такое мобильное тестирование?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Мобильное тестирование</strong> - это процесс проверки программного обеспечения, разработанного для мобильных устройств.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Зачем тестировать мобильные приложения?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                      <li>Фрагментация устройств: Множество моделей, размеров экранов, версий ОС.</li>
                      <li>Различные сети: 2G, 3G, 4G, 5G, Wi-Fi, нестабильное соединение.</li>
                      <li>Особенности использования: Прерывания (звонки, SMS), жесты, ориентация экрана.</li>
                      <li>Производительность и батарея: Потребление ресурсов, влияние на заряд батареи.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Типы мобильных приложений</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                      <li><strong>Нативные:</strong> Разработаны специально для конкретной платформы (iOS/Android).</li>
                      <li><strong>Гибридные:</strong> Разработаны с использованием веб-технологий и обернуты в нативный контейнер.</li>
                      <li><strong>Веб-приложения (Mobile Web):</strong> Сайты, оптимизированные для просмотра на мобильных устройствах через браузер.</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Types of Testing */}
          <TabsContent value="types" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5" />
                  Виды мобильного тестирования
                </CardTitle>
                <CardDescription>
                  Основные типы тестирования, применяемые к мобильным приложениям.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Помимо стандартных видов тестирования, мобильные приложения требуют специфических проверок.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader><CardTitle className="text-lg">Функциональное тестирование</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Проверка всех функций приложения на соответствие требованиям.</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Тестирование производительности</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Оценка скорости, отзывчивости и стабильности приложения.</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Тестирование удобства использования (Usability)</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Проверка интуитивности, простоты и комфорта использования приложения.</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Тестирование совместимости</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Проверка работы приложения на различных устройствах, версиях ОС и разрешениях экрана.</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Тестирование прерываний</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Проверка поведения приложения при внешних событиях (звонки, SMS, переключение сети).</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Тестирование безопасности</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Выявление уязвимостей и защита данных пользователя.</p></CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Platforms */}
          <TabsContent value="platforms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Платформы и окружение
                </CardTitle>
                <CardDescription>
                  Особенности тестирования на Android и iOS.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Тестирование на реальных устройствах всегда предпочтительнее, но эмуляторы/симуляторы полезны.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader><CardTitle className="text-lg">Тестирование на Android</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Android - самая распространенная мобильная ОС с большим разнообразием устройств. Фрагментация, установка APK, ADB для логов [^10].</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Тестирование на iOS</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">iOS - закрытая экосистема Apple с меньшей фрагментацией. Установка IPA через Xcode, симулятор, UDID [^10].</p></CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tools */}
          <TabsContent value="tools" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Инструменты для мобильного тестирования
                </CardTitle>
                <CardDescription>
                  Основные инструменты для ручного и автоматизированного тестирования.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Для эффективного мобильного тестирования часто используются комбинации инструментов.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader><CardTitle className="text-lg">Android Studio</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Официальная IDE для Android, включает эмулятор [^10].</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Xcode</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Официальная IDE для iOS, включает симулятор [^10].</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">ADB (Android Debug Bridge)</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Утилита командной строки для взаимодействия с Android-устройством [^10].</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Appium</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Кроссплатформенный фреймворк для автоматизации тестирования.</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Облачные платформы (Firebase Test Lab, BrowserStack)</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Платформы для тестирования на реальных устройствах в масштабе.</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Charles Proxy / Fiddler</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Инструменты для перехвата и анализа HTTP/HTTPS трафика.</p></CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
