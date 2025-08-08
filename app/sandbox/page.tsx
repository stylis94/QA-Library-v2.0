'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Play, Database, Code, MessageSquare, CheckCircle, AlertCircle, Copy } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

const sqlExamples = [
  {
    title: "Базовый SELECT",
    query: "SELECT * FROM users WHERE age > 25;",
    description: "Выбрать всех пользователей старше 25 лет"
  },
  {
    title: "JOIN запрос",
    query: `SELECT u.name, o.total 
FROM users u 
JOIN orders o ON u.id = o.user_id 
WHERE o.total > 100;`,
    description: "Пользователи с заказами больше 100"
  },
  {
    title: "GROUP BY",
    query: `SELECT category, COUNT(*) as count 
FROM products 
GROUP BY category 
ORDER BY count DESC;`,
    description: "Количество товаров по категориям"
  }
]

const apiExamples = [
  {
    title: "GET запрос",
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    description: "Получить список пользователей"
  },
  {
    title: "POST запрос",
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    body: JSON.stringify({
      title: "Test Post",
      body: "This is a test post",
      userId: 1
    }, null, 2),
    description: "Создать новый пост"
  },
  {
    title: "PUT запрос",
    method: "PUT",
    url: "https://jsonplaceholder.typicode.com/posts/1",
    body: JSON.stringify({
      id: 1,
      title: "Updated Post",
      body: "This post has been updated",
      userId: 1
    }, null, 2),
    description: "Обновить существующий пост"
  }
]

export default function SandboxPage() {
  const [sqlQuery, setSqlQuery] = useState(sqlExamples[0].query)
  const [sqlResult, setSqlResult] = useState('')
  const [sqlLoading, setSqlLoading] = useState(false)
  
  const [apiUrl, setApiUrl] = useState(apiExamples[0].url)
  const [apiMethod, setApiMethod] = useState(apiExamples[0].method)
  const [apiBody, setApiBody] = useState('')
  const [apiResult, setApiResult] = useState('')
  const [apiLoading, setApiLoading] = useState(false)

  const executeSqlQuery = async () => {
    setSqlLoading(true)
    // Симуляция выполнения SQL запроса
    setTimeout(() => {
      const mockResults = [
        { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
        { id: 2, name: "Jane Smith", age: 28, email: "jane@example.com" },
        { id: 3, name: "Bob Johnson", age: 35, email: "bob@example.com" }
      ]
      setSqlResult(JSON.stringify(mockResults, null, 2))
      setSqlLoading(false)
    }, 1000)
  }

  const executeApiRequest = async () => {
    setApiLoading(true)
    try {
      const options: RequestInit = {
        method: apiMethod,
        headers: {
          'Content-Type': 'application/json',
        }
      }
      
      if (apiMethod !== 'GET' && apiBody) {
        options.body = apiBody
      }

      const response = await fetch(apiUrl, options)
      const data = await response.json()
      
      const result = {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        data: data
      }
      
      setApiResult(JSON.stringify(result, null, 2))
    } catch (error) {
      setApiResult(`Error: ${error}`)
    } finally {
      setApiLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

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
                Песочницы для практики
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Интерактивные среды для изучения SQL и API тестирования
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="sql" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sql" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              SQL Песочница
            </TabsTrigger>
            <TabsTrigger value="api" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              API Тестер
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sql" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* SQL Query Editor */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    SQL Редактор
                  </CardTitle>
                  <CardDescription>
                    Пишите и выполняйте SQL запросы
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">SQL Запрос:</label>
                    <Textarea
                      value={sqlQuery}
                      onChange={(e) => setSqlQuery(e.target.value)}
                      placeholder="Введите ваш SQL запрос..."
                      className="font-mono text-sm min-h-32"
                    />
                  </div>
                  
                  <Button 
                    onClick={executeSqlQuery}
                    disabled={sqlLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {sqlLoading ? (
                      "Выполняется..."
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Выполнить запрос
                      </>
                    )}
                  </Button>

                  {/* Examples */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Примеры запросов:</h4>
                    <div className="space-y-2">
                      {sqlExamples.map((example, index) => (
                        <div key={index} className="p-2 border rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-sm">{example.title}</div>
                              <div className="text-xs text-slate-600 dark:text-slate-300">{example.description}</div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSqlQuery(example.query)}
                            >
                              Использовать
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* SQL Results */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Результат
                    </CardTitle>
                    {sqlResult && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(sqlResult)}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Копировать
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {sqlResult ? (
                    <div className="space-y-4">
                      <Alert>
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>
                          Запрос выполнен успешно
                        </AlertDescription>
                      </Alert>
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm overflow-auto max-h-96">
                        {sqlResult}
                      </pre>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                      Выполните запрос, чтобы увидеть результат
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Database Schema */}
            <Card>
              <CardHeader>
                <CardTitle>Схема базы данных</CardTitle>
                <CardDescription>
                  Доступные таблицы и их структура
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">users</h4>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                      <li>• id (INT, PRIMARY KEY)</li>
                      <li>• name (VARCHAR)</li>
                      <li>• email (VARCHAR)</li>
                      <li>• age (INT)</li>
                      <li>• created_at (DATETIME)</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">orders</h4>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                      <li>• id (INT, PRIMARY KEY)</li>
                      <li>• user_id (INT, FOREIGN KEY)</li>
                      <li>• total (DECIMAL)</li>
                      <li>• status (VARCHAR)</li>
                      <li>• created_at (DATETIME)</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">products</h4>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                      <li>• id (INT, PRIMARY KEY)</li>
                      <li>• name (VARCHAR)</li>
                      <li>• category (VARCHAR)</li>
                      <li>• price (DECIMAL)</li>
                      <li>• stock (INT)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* API Request Builder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    API Запрос
                  </CardTitle>
                  <CardDescription>
                    Создайте и отправьте HTTP запрос
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-4 gap-2">
                    <select 
                      value={apiMethod}
                      onChange={(e) => setApiMethod(e.target.value)}
                      className="px-3 py-2 border rounded-md bg-white dark:bg-slate-800"
                    >
                      <option value="GET">GET</option>
                      <option value="POST">POST</option>
                      <option value="PUT">PUT</option>
                      <option value="DELETE">DELETE</option>
                    </select>
                    <input
                      type="text"
                      value={apiUrl}
                      onChange={(e) => setApiUrl(e.target.value)}
                      placeholder="URL"
                      className="col-span-3 px-3 py-2 border rounded-md bg-white dark:bg-slate-800"
                    />
                  </div>

                  {(apiMethod === 'POST' || apiMethod === 'PUT') && (
                    <div>
                      <label className="text-sm font-medium mb-2 block">Request Body (JSON):</label>
                      <Textarea
                        value={apiBody}
                        onChange={(e) => setApiBody(e.target.value)}
                        placeholder='{"key": "value"}'
                        className="font-mono text-sm min-h-24"
                      />
                    </div>
                  )}

                  <Button 
                    onClick={executeApiRequest}
                    disabled={apiLoading}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    {apiLoading ? (
                      "Отправляется..."
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Отправить запрос
                      </>
                    )}
                  </Button>

                  {/* API Examples */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Примеры запросов:</h4>
                    <div className="space-y-2">
                      {apiExamples.map((example, index) => (
                        <div key={index} className="p-2 border rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant="outline" className="text-xs">
                                  {example.method}
                                </Badge>
                                <span className="font-medium text-sm">{example.title}</span>
                              </div>
                              <div className="text-xs text-slate-600 dark:text-slate-300">{example.description}</div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setApiMethod(example.method)
                                setApiUrl(example.url)
                                setApiBody(example.body || '')
                              }}
                            >
                              Использовать
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* API Response */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Ответ
                    </CardTitle>
                    {apiResult && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(apiResult)}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Копировать
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {apiResult ? (
                    <div className="space-y-4">
                      <Alert>
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>
                          Запрос выполнен
                        </AlertDescription>
                      </Alert>
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm overflow-auto max-h-96">
                        {apiResult}
                      </pre>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                      Отправьте запрос, чтобы увидеть ответ
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* API Testing Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Советы по API тестированию</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Что проверять:</h4>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                      <li>• HTTP статус коды (200, 404, 500)</li>
                      <li>• Структуру JSON ответа</li>
                      <li>• Время ответа</li>
                      <li>• Валидацию входных данных</li>
                      <li>• Обработку ошибок</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">Полезные инструменты:</h4>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                      <li>• Postman - для ручного тестирования</li>
                      <li>• Newman - для автоматизации</li>
                      <li>• Swagger - для документации</li>
                      <li>• JSONPath - для извлечения данных</li>
                      <li>• Faker.js - для тестовых данных</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
