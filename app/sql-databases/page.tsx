'use client'

import { ArrowLeft, Database, Lightbulb, Table, Search, Plus, Edit, Trash, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

// Simulated database data
const initialUsers = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 30, city: 'New York' },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 24, city: 'London' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35, city: 'New York' },
  { id: 4, name: 'David', email: 'david@example.com', age: 29, city: 'Paris' },
];

const initialProducts = [
  { id: 101, name: 'Laptop', price: 1200, category: 'Electronics' },
  { id: 102, name: 'Mouse', price: 25, category: 'Electronics' },
  { id: 103, name: 'Keyboard', price: 75, category: 'Electronics' },
  { id: 104, name: 'Desk Chair', price: 300, category: 'Furniture' },
];

const initialOrders = [
  { order_id: 1001, user_id: 1, product_id: 101, quantity: 1, order_date: '2023-01-15' },
  { order_id: 1002, user_id: 2, product_id: 102, quantity: 2, order_date: '2023-01-16' },
  { order_id: 1003, user_id: 1, product_id: 103, quantity: 1, order_date: '2023-01-17' },
  { order_id: 1004, user_id: 3, product_id: 104, quantity: 1, order_date: '2023-01-18' },
];

export default function SqlDatabasesPage() {
  const [query, setQuery] = useState('SELECT * FROM users;')
  const [queryResult, setQueryResult] = useState<any[] | string>([])
  const [currentTable, setCurrentTable] = useState('users')

  const executeQuery = () => {
    const lowerCaseQuery = query.toLowerCase().trim();
    let result: any[] | string = [];

    try {
      if (lowerCaseQuery.startsWith('select')) {
        if (lowerCaseQuery.includes('from users')) {
          result = initialUsers;
          if (lowerCaseQuery.includes('where')) {
            const whereClause = lowerCaseQuery.split('where')[1].trim();
            result = initialUsers.filter(user => {
              // Simple parsing for demonstration
              if (whereClause.includes('age >')) {
                const age = parseInt(whereClause.split('age >')[1].trim());
                return user.age > age;
              }
              if (whereClause.includes('email =')) {
                const email = whereClause.split('email =')[1].trim().replace(/'/g, '');
                return user.email === email;
              }
              if (whereClause.includes('city =')) {
                const city = whereClause.split('city =')[1].trim().replace(/'/g, '');
                return user.city === city;
              }
              return true;
            });
          }
        } else if (lowerCaseQuery.includes('from products')) {
          result = initialProducts;
        } else if (lowerCaseQuery.includes('from orders')) {
          result = initialOrders;
        } else if (lowerCaseQuery.includes('from users u join orders o on u.id = o.user_id')) {
          // Simulate a JOIN
          result = initialOrders.map(order => {
            const user = initialUsers.find(u => u.id === order.user_id);
            return { ...order, user_name: user?.name, user_email: user?.email };
          });
        } else {
          result = "Ошибка: Неизвестная таблица или сложный запрос не поддерживается в этой песочнице.";
        }
      } else {
        result = "Поддерживаются только SELECT запросы в этой песочнице.";
      }
    } catch (e: any) {
      result = `Ошибка выполнения запроса: ${e.message}`;
    }
    setQueryResult(result);
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
                SQL и базы данных
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Основы SQL для тестировщиков и проверка данных в БД
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="basics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basics">Основы БД и SQL</TabsTrigger>
            <TabsTrigger value="queries">Основные запросы</TabsTrigger>
            <TabsTrigger value="sandbox">Песочница SQL</TabsTrigger>
          </TabsList>

          {/* Basics */}
          <TabsContent value="basics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Что такое база данных?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>База данных</strong> — это хранилище, где лежат все данные системы: пользователи, заказы, продукты, транзакции. База состоит из **таблиц** (как в Excel), где есть строки и столбцы [^11].
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Основные понятия</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">Таблица</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Набор данных одной сущности (например, `users`) [^11].
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">Столбец (Column)</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Характеристика (например, `email`, `age`) [^11].
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">Строка (Row)</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Одна запись (например, один пользователь) [^11].
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ключи</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">Первичный ключ (PRIMARY KEY)</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Уникальный идентификатор строки. Обычно это поле `id` [^11].
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">Внешний ключ (FOREIGN KEY)</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Ссылка на другую таблицу. Например, в таблице `orders` есть `user_id`, указывающий на пользователя в таблице `users` [^11].
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Что такое SQL?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Alert>
                      <Lightbulb className="h-4 w-4" />
                      <AlertDescription>
                        <strong>SQL (Structured Query Language)</strong> — язык запросов к базе данных. QA использует SQL для проверки данных в базе [^11].
                      </AlertDescription>
                    </Alert>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      С помощью SQL вы можете:
                    </p>
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                      <li>Искать записи (`SELECT`) [^11]</li>
                      <li>Фильтровать (`WHERE`) [^11]</li>
                      <li>Объединять (`JOIN`) [^11]</li>
                      <li>Добавлять (`INSERT`) [^11]</li>
                      <li>Обновлять (`UPDATE`) [^11]</li>
                      <li>Удалять (`DELETE`) [^11]</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Queries */}
          <TabsContent value="queries" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Основные SQL запросы
                </CardTitle>
                <CardDescription>
                  Примеры часто используемых запросов для тестировщиков.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Практикуйтесь с этими запросами в песочнице, чтобы лучше понять их работу.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">SELECT - Выборка данных</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Используется для извлечения данных из одной или нескольких таблиц.
                    </p>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>SELECT * FROM users; -- Выбрать все столбцы из таблицы users [^11]</code>
                    </pre>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>SELECT name, email FROM users; -- Выбрать только столбцы name и email</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">WHERE - Фильтрация данных</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Используется для фильтрации строк на основе заданного условия [^11].
                    </p>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>SELECT * FROM users WHERE age > 25; -- Пользователи старше 25 лет</code>
                    </pre>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>SELECT * FROM users WHERE email = 'alice@example.com'; -- Пользователь с конкретным email [^11]</code>
                    </pre>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>SELECT * FROM users WHERE city = 'New York' AND age < 35; -- С использованием AND [^11]</code>
                    </pre>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>SELECT * FROM users WHERE city = 'London' OR city = 'Paris'; -- С использованием OR [^11]</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">LIKE, IN, NOT IN - Шаблоны и списки</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      `LIKE` для поиска по шаблону, `IN` для проверки на вхождение в список [^11].
                    </p>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>SELECT * FROM users WHERE email LIKE '%@example.com'; -- Email заканчивается на @example.com [^11]</code>
                    </pre>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>SELECT * FROM users WHERE city IN ('New York', 'London'); -- Пользователи из Нью-Йорка или Лондона [^11]</code>
                    </pre>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>SELECT * FROM users WHERE city NOT IN ('New York', 'London'); -- Пользователи не из Нью-Йорка и не из Лондона [^11]</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">JOIN - Объединение таблиц</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Используется для объединения строк из двух или более таблиц на основе связанного столбца [^11].
                    </p>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>SELECT u.name, o.order_id, o.order_date
FROM users u
JOIN orders o ON u.id = o.user_id; -- Получить заказы с именами пользователей</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">INSERT, UPDATE, DELETE - Изменение данных</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Запросы для добавления, изменения и удаления данных [^11].
                    </p>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>INSERT INTO users (name, email, age, city) VALUES ('Eve', 'eve@example.com', 28, 'Berlin'); -- Добавить нового пользователя</code>
                    </pre>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>UPDATE users SET age = 31 WHERE name = 'Alice'; -- Обновить возраст пользователя</code>
                    </pre>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-auto">
                      <code>DELETE FROM users WHERE name = 'David'; -- Удалить пользователя</code>
                    </pre>
                    <Alert variant="destructive" className="mt-2">
                      <Lightbulb className="h-4 w-4" />
                      <AlertDescription>
                        Внимание: INSERT, UPDATE, DELETE запросы не будут выполняться в этой песочнице, так как она предназначена только для демонстрации SELECT.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sandbox */}
          <TabsContent value="sandbox" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Table className="w-5 h-5" />
                  Песочница SQL
                </CardTitle>
                <CardDescription>
                  Практикуйте SQL запросы на симулированных данных.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Используйте таблицы: `users`, `products`, `orders`. Попробуйте `SELECT * FROM users;`
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Query Editor */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Редактор запросов</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label htmlFor="sql-query" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Ваш SQL запрос</label>
                        <Textarea
                          id="sql-query"
                          rows={10}
                          placeholder="SELECT * FROM users WHERE age > 25;"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          className="font-mono"
                        />
                      </div>
                      <Button onClick={executeQuery} className="w-full">
                        Выполнить запрос
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Result Viewer */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Результат запроса</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {typeof queryResult === 'string' ? (
                        <Alert variant="destructive">
                          <XCircle className="h-4 w-4" />
                          <AlertDescription>{queryResult}</AlertDescription>
                        </Alert>
                      ) : (
                        <div className="overflow-x-auto">
                          {queryResult.length > 0 ? (
                            <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                              <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                                <tr>
                                  {Object.keys(queryResult[0]).map((key) => (
                                    <th key={key} scope="col" className="px-6 py-3">{key}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {queryResult.map((row, rowIndex) => (
                                  <tr key={rowIndex} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                    {Object.values(row).map((value: any, colIndex) => (
                                      <td key={colIndex} className="px-6 py-4">{value}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <p className="text-center text-slate-600 dark:text-slate-300">
                              Результат появится здесь.
                            </p>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Доступные таблицы</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Tabs value={currentTable} onValueChange={setCurrentTable}>
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="users">users</TabsTrigger>
                        <TabsTrigger value="products">products</TabsTrigger>
                        <TabsTrigger value="orders">orders</TabsTrigger>
                      </TabsList>
                      <TabsContent value="users" className="mt-4">
                        <h4 className="font-medium mb-2">Таблица `users`:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                              <tr>
                                <th className="px-6 py-3">id</th>
                                <th className="px-6 py-3">name</th>
                                <th className="px-6 py-3">email</th>
                                <th className="px-6 py-3">age</th>
                                <th className="px-6 py-3">city</th>
                              </tr>
                            </thead>
                            <tbody>
                              {initialUsers.map((user) => (
                                <tr key={user.id} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                  <td className="px-6 py-4">{user.id}</td>
                                  <td className="px-6 py-4">{user.name}</td>
                                  <td className="px-6 py-4">{user.email}</td>
                                  <td className="px-6 py-4">{user.age}</td>
                                  <td className="px-6 py-4">{user.city}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </TabsContent>
                      <TabsContent value="products" className="mt-4">
                        <h4 className="font-medium mb-2">Таблица `products`:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                              <tr>
                                <th className="px-6 py-3">id</th>
                                <th className="px-6 py-3">name</th>
                                <th className="px-6 py-3">price</th>
                                <th className="px-6 py-3">category</th>
                              </tr>
                            </thead>
                            <tbody>
                              {initialProducts.map((product) => (
                                <tr key={product.id} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                  <td className="px-6 py-4">{product.id}</td>
                                  <td className="px-6 py-4">{product.name}</td>
                                  <td className="px-6 py-4">{product.price}</td>
                                  <td className="px-6 py-4">{product.category}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </TabsContent>
                      <TabsContent value="orders" className="mt-4">
                        <h4 className="font-medium mb-2">Таблица `orders`:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                              <tr>
                                <th className="px-6 py-3">order_id</th>
                                <th className="px-6 py-3">user_id</th>
                                <th className="px-6 py-3">product_id</th>
                                <th className="px-6 py-3">quantity</th>
                                <th className="px-6 py-3">order_date</th>
                              </tr>
                            </thead>
                            <tbody>
                              {initialOrders.map((order) => (
                                <tr key={order.order_id} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                  <td className="px-6 py-4">{order.order_id}</td>
                                  <td className="px-6 py-4">{order.user_id}</td>
                                  <td className="px-6 py-4">{order.product_id}</td>
                                  <td className="px-6 py-4">{order.quantity}</td>
                                  <td className="px-6 py-4">{order.order_date}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
