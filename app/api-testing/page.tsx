'use client'

import { ArrowLeft, Globe, Code, Zap, ListChecks, Lightbulb, Settings } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'

export default function ApiTestingPage() {
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
                API тестирование
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                REST API, HTTP методы, статус коды, инструменты тестирования
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="http">HTTP методы</TabsTrigger>
            <TabsTrigger value="testing">Тестирование</TabsTrigger>
            <TabsTrigger value="tools">Инструменты</TabsTrigger>
            <TabsTrigger value="practice">Практика</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Основы API тестирования
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>API (Application Programming Interface)</strong> - интерфейс для взаимодействия между приложениями. API тестирование проверяет корректность обмена данными между системами.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Что такое REST API?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      REST (Representational State Transfer) - это архитектурный стиль для веб-сервисов. Он основан на использовании стандартных HTTP методов для взаимодействия с ресурсами.
                    </p>
                    <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400">
                      <li><strong>Stateless:</strong> Каждый запрос содержит всю необходимую информацию.</li>
                      <li><strong>Resource-based:</strong> Работа с ресурсами через URL (например, `/users/123`).</li>
                      <li><strong>HTTP методы:</strong> GET, POST, PUT, DELETE для разных операций.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Зачем тестировать API?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Тестирование API позволяет выявлять дефекты на ранних стадиях разработки, до того как они проявятся в пользовательском интерфейсе.
                    </p>
                    <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400">
                      <li>Независимость от UI: Тестирование логики без интерфейса.</li>
                      <li>Быстрое выполнение: API тесты работают быстрее UI тестов.</li>
                      <li>Раннее обнаружение багов: Проблемы находятся на уровне данных.</li>
                      <li>Интеграционное тестирование: Проверка взаимодействия систем.</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* HTTP Methods */}
          <TabsContent value="http" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  HTTP методы
                </CardTitle>
                <CardDescription>
                  Основные методы HTTP запросов и их назначение.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    HTTP методы (или глаголы) указывают на желаемое действие, которое должно быть выполнено над ресурсом.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader><h3 className="text-lg font-semibold">GET</h3></CardHeader>
                    <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Получение данных с сервера. Не изменяет состояние ресурса.</p></CardContent>
                  </Card>
                  <Card>
                    <CardHeader><h3 className="text-lg font-semibold">POST</h3></CardHeader>
                    <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Отправка данных на сервер для создания нового ресурса.</p></CardContent>
                  </Card>
                  <Card>
                    <CardHeader><h3 className="text-lg font-semibold">PUT</h3></CardHeader>
                    <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Полное обновление существующего ресурса или создание нового.</p></CardContent>
                  </Card>
                  <Card>
                    <CardHeader><h3 className="text-lg font-semibold">PATCH</h3></CardHeader>
                    <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Частичное обновление существующего ресурса.</p></CardContent>
                  </Card>
                  <Card>
                    <CardHeader><h3 className="text-lg font-semibold">DELETE</h3></CardHeader>
                    <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Удаление ресурса с сервера.</p></CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">HTTP Статус коды</CardTitle>
                    <CardDescription>
                      Коды состояния HTTP показывают, был ли HTTP-запрос успешно завершен.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Card><CardHeader><h3 className="text-lg font-semibold text-green-600">2xx Успех</h3></CardHeader><CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Запрос успешно обработан.</p></CardContent></Card>
                      <Card><CardHeader><h3 className="text-lg font-semibold text-yellow-600">3xx Перенаправление</h3></CardHeader><CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Требуется дополнительное действие.</p></CardContent></Card>
                      <Card><CardHeader><h3 className="text-lg font-semibold text-red-600">4xx Ошибка клиента</h3></CardHeader><CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Ошибка на стороне клиента.</p></CardContent></Card>
                      <Card><CardHeader><h3 className="text-lg font-semibold text-purple-600">5xx Ошибка сервера</h3></CardHeader><CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Ошибка на стороне сервера.</p></CardContent></Card>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testing */}
          <TabsContent value="testing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5" />
                  Виды и сценарии тестирования API
                </CardTitle>
                <CardDescription>
                  Основные подходы к тестированию API.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Тестирование API включает функциональные, нагрузочные и безопасные проверки.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Виды тестирования API</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                      <li><strong>Функциональное:</strong> Проверка, что API выполняет заявленные функции.</li>
                      <li><strong>Нагрузочное:</strong> Оценка производительности API под нагрузкой.</li>
                      <li><strong>Безопасности:</strong> Выявление уязвимостей.</li>
                      <li><strong>Надежности:</strong> Проверка способности API восстанавливаться после сбоев.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Основные сценарии</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                      <li><strong>Позитивные:</strong> Запросы с корректными данными, ожидается успешный ответ.</li>
                      <li><strong>Негативные:</strong> Запросы с некорректными данными, ожидается ошибка.</li>
                      <li><strong>Граничные значения:</strong> Тестирование с минимальными/максимальными значениями.</li>
                      <li><strong>Авторизация:</strong> Проверка доступа к защищенным ресурсам.</li>
                    </ul>
                  </CardContent>
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
                  Инструменты для тестирования API
                </CardTitle>
                <CardDescription>
                  Популярные инструменты для ручного и автоматизированного тестирования API.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Выбор инструмента зависит от ваших потребностей.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader><CardTitle className="text-lg">Postman</CardTitle></CardHeader>
                    <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Популярный инструмент для создания, отправки и тестирования HTTP запросов с удобным GUI.</p></CardContent>
                  </Card>
                  <Card>
                    <CardHeader><CardTitle className="text-lg">Insomnia</CardTitle></CardHeader>
                    <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Мощный REST клиент с открытым исходным кодом, схожий с Postman.</p></CardContent>
                  </Card>
                  <Card>
                    <CardHeader><CardTitle className="text-lg">cURL</CardTitle></CardHeader>
                    <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Утилита командной строки для передачи данных, отлично подходит для быстрых проверок.</p></CardContent>
                  </Card>
                  <Card>
                    <CardHeader><CardTitle className="text-lg">Swagger UI / OpenAPI</CardTitle></CardHeader>
                    <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Инструменты для документирования и интерактивного тестирования API.</p></CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Practice */}
          <TabsContent value="practice" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Практические задания
                </CardTitle>
                <CardDescription>
                  Примените полученные знания на практике.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Используйте публичный API JSONPlaceholder (`https://jsonplaceholder.typicode.com`) для выполнения заданий.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader><CardTitle className="text-lg">Задание 1: GET запрос</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Отправьте GET запрос на `https://jsonplaceholder.typicode.com/posts/1` и проверьте статус 200.</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Задание 2: POST запрос</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Отправьте POST запрос на `https://jsonplaceholder.typicode.com/posts` с телом `{`"title": "foo", "body": "bar", "userId": 1`}` и проверьте статус 201.</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Задание 3: Негативный сценарий</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-slate-600 dark:text-slate-300">Отправьте GET запрос на несуществующий ресурс, например, `https://jsonplaceholder.typicode.com/nonexistent` и проверьте статус 404.</p></CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
