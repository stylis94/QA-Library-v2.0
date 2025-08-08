'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, ArrowLeft, FileText, ClipboardList, Target, Settings, Users, BookOpen, Code, Download, Upload, Eye, Lightbulb, ListChecks, Bug, Table } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function DocumentationPage() {
  const [testCaseForm, setTestCaseForm] = useState({
    title: '',
    preconditions: '',
    steps: '',
    expectedResult: '',
    priority: 'Medium'
  })

  const [bugReportForm, setBugReportForm] = useState({
    title: '',
    description: '',
    steps: '',
    expected: '',
    actual: '',
    severity: 'Medium'
  })

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
                Документация в тестировании
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Тест-кейсы, чек-листы, баг-репорты и другие артефакты
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="test-cases">Тест-кейсы</TabsTrigger>
            <TabsTrigger value="checklists">Чек-листы</TabsTrigger>
            <TabsTrigger value="bug-reports">Баг-репорты</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Зачем нужна тестовая документация?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Тестовая документация нужна, чтобы процесс тестирования был **повторяемым, понятным и прозрачным** [^8].
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Цели документации</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">Понимание дефектов</p>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Разработчики понимают, что сломалось.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">Повторяемость тестов</p>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Коллеги могут повторить тест.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">Прозрачность процесса</p>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Бизнес видит, что и как проверяется.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Основные артефакты</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">Тест-план</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Документ, описывающий объем, подход, ресурсы и график тестовых мероприятий.
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">Тест-кейс</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Подробный сценарий проверки конкретной функции [^8].
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">Чек-лист</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Список проверок без подробных шагов [^8].
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">Баг-репорт</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Документ, описывающий найденный дефект.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Test Cases */}
          <TabsContent value="test-cases" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5" />
                  Тест-кейсы
                </CardTitle>
                <CardDescription>
                  Подробные сценарии проверки функциональности.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Тест-кейс</strong> — это подробный сценарий проверки конкретной функции. Включает: Название, Предусловия, Шаги, Ожидаемый результат, Фактический результат (во время выполнения) [^8].
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Пример тест-кейса</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-sm overflow-auto">
                      <code>{`Название: Проверка авторизации с корректными данными
Предусловия: Пользователь зарегистрирован
Шаги:
1. Перейти на https://example.com/login
2. Ввести логин "test@test.com"
3. Ввести пароль "123456"
4. Нажать кнопку "Войти"
Ожидаемый результат:
Пользователь успешно входит в систему`}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Как описывать шаги теста?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Понятно и последовательно</p>
                          <p className="text-xs text-slate-600 dark:text-slate-300">Каждый шаг должен быть четким и логичным.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Без лишних слов</p>
                          <p className="text-xs text-slate-600 dark:text-slate-300">Избегайте двусмысленности и избыточной информации [^8].</p>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Пример:</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          ❌ Плохо: "Зайти туда и попробовать логин"
                          <br />
                          ✅ Хорошо: "Открыть страницу логина → ввести email → нажать кнопку «Войти»" [^8]
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </Card>
          </TabsContent>

          {/* Checklists */}
          <TabsContent value="checklists" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5" />
                  Чек-листы
                </CardTitle>
                <CardDescription>
                  Списки проверок без подробных шагов.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Чек-лист</strong> — это список проверок **без подробных шагов**. Удобно для быстрых проверок и smoke-тестов [^8].
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Пример чек-листа для формы входа</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-sm overflow-auto">
                      <code>{`- [ ] Вход с корректными данными
- [ ] Ошибка при неверном пароле
- [ ] Проверка пустых полей
- [ ] Проверка кнопки "Показать пароль"
- [ ] Вход с невалидным email`}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Когда использовать чек-лист, а когда тест-кейс?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">Ситуация</th>
                            <th scope="col" className="px-6 py-3">Что выбрать</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                            <td className="px-6 py-4">Много новых функций, тестируют все</td>
                            <td className="px-6 py-4"><strong>Тест-кейсы</strong> — чтобы ничего не забыть [^8]</td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                            <td className="px-6 py-4">Быстрая проверка перед релизом</td>
                            <td className="px-6 py-4"><strong>Чек-лист</strong> — быстро и эффективно [^8]</td>
                          </tr>
                          <tr className="bg-white dark:bg-slate-800">
                            <td className="px-6 py-4">Нужно показать клиенту/менеджеру, что было проверено</td>
                            <td className="px-6 py-4"><strong>Чек-лист</strong> или итог выполнения тестов [^8]</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bug Reports */}
          <TabsContent value="bug-reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="w-5 h-5" />
                  Баг-репорты
                </CardTitle>
                <CardDescription>
                  Как правильно описывать найденные дефекты.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Хорошо написанный баг-репорт помогает разработчикам быстро понять и исправить дефект.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Пример баг-репорта</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-sm overflow-auto">
                      <code>{`Заголовок: Кнопка "Сохранить" не работает на странице профиля

Шаги:
1. Перейти в профиль
2. Заполнить все поля
3. Нажать "Сохранить"

Ожидаемый результат: Изменения сохраняются, появляется сообщение
Фактический результат: Кнопка не реагирует

Браузер: Chrome 122  
ОС: Windows 10  
Приоритет: High`}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Обязательные поля баг-репорта</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                      <li><strong>Заголовок:</strong> Краткое и информативное описание проблемы.</li>
                      <li><strong>Шаги воспроизведения:</strong> Четкие и последовательные шаги, которые приводят к дефекту [^8].</li>
                      <li><strong>Ожидаемый результат:</strong> Как система должна была себя вести [^8].</li>
                      <li><strong>Фактический результат:</strong> Как система повела себя на самом деле [^8].</li>
                      <li><strong>Окружение:</strong> Браузер, ОС, версия приложения, устройство [^8].</li>
                      <li><strong>Приоритет (Priority):</strong> Важность исправления дефекта с точки зрения бизнеса [^7].</li>
                      <li><strong>Серьезность (Severity):</strong> Степень влияния дефекта на функциональность системы [^7].</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/test-design">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Предыдущий раздел
            </Button>
          </Link>
          <Link href="/bug-management">
            <Button>
              Следующий раздел: Работа с багами
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
