'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Bug, ArrowLeft, AlertTriangle, Clock, Users, Target, TrendingUp, CheckCircle, XCircle, Pause, RotateCcw, Eye, MessageSquare, Lightbulb, User, ListChecks } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

const bugLifecycleStates = [
  { name: 'New', color: 'bg-blue-500', description: 'Баг только что найден и зарегистрирован' },
  { name: 'Assigned', color: 'bg-yellow-500', description: 'Баг назначен разработчику' },
  { name: 'In Progress', color: 'bg-orange-500', description: 'Разработчик работает над исправлением' },
  { name: 'Fixed', color: 'bg-green-500', description: 'Баг исправлен разработчиком' },
  { name: 'Verified', color: 'bg-teal-500', description: 'Исправление проверено тестировщиком' },
  { name: 'Closed', color: 'bg-gray-500', description: 'Баг закрыт' },
  { name: 'Reopened', color: 'bg-red-500', description: 'Баг переоткрыт из-за неполного исправления' }
]

export default function BugManagementPage() {
  const [selectedSeverity, setSelectedSeverity] = useState('High')
  const [selectedPriority, setSelectedPriority] = useState('High')

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
                Работа с багами
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Жизненный цикл бага, приоритизация, трекинг
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="lifecycle" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="lifecycle">Жизненный цикл</TabsTrigger>
            <TabsTrigger value="priority-severity">Приоритет и Серьезность</TabsTrigger>
            <TabsTrigger value="tools">Инструменты трекинга</TabsTrigger>
          </TabsList>

          {/* Bug Lifecycle */}
          <TabsContent value="lifecycle" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="w-5 h-5" />
                  Жизненный цикл бага
                </CardTitle>
                <CardDescription>
                  Этапы, через которые проходит дефект от обнаружения до закрытия.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Понимание жизненного цикла бага помогает эффективно управлять дефектами и взаимодействовать с командой [^7].
                  </AlertDescription>
                </Alert>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">Стадия</th>
                        <th scope="col" className="px-6 py-3">Что происходит</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">New</td>
                        <td className="px-6 py-4">Баг найден и зарегистрирован [^7]</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Open</td>
                        <td className="px-6 py-4">QA / Менеджер подтвердил баг [^7]</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Assigned</td>
                        <td className="px-6 py-4">Назначен разработчику [^7]</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">In Progress</td>
                        <td className="px-6 py-4">Разработчик чинит баг [^7]</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Fixed</td>
                        <td className="px-6 py-4">Исправлено, ждет проверки [^7]</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Retest</td>
                        <td className="px-6 py-4">QA перепроверяет [^7]</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Closed</td>
                        <td className="px-6 py-4">Баг не воспроизводится — закрыт [^7]</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Reopened</td>
                        <td className="px-6 py-4">Баг не пофикшен — снова в работе [^7]</td>
                      </tr>
                      <tr className="bg-white dark:bg-slate-800">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Rejected</td>
                        <td className="px-6 py-4">Баг не считается ошибкой [^7]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Priority and Severity */}
          <TabsContent value="priority-severity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5" />
                  Приоритет и Серьезность
                </CardTitle>
                <CardDescription>
                  Как оценивать важность и влияние дефектов.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Приоритет</strong> (Priority) - это важность исправления дефекта с точки зрения бизнеса и пользователей. <strong>Серьезность</strong> (Severity) - это степень влияния дефекта на функциональность системы [^7].
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Приоритет (Priority)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Определяет, как быстро должен быть исправлен баг. Устанавливается менеджером продукта или командой.
                      </p>
                      <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400">
                        <li><strong>Highest/Critical:</strong> Блокирует работу, требует немедленного исправления.</li>
                        <li><strong>High:</strong> Серьезно влияет на функциональность, но есть обходные пути.</li>
                        <li><strong>Medium:</strong> Умеренное влияние, может быть исправлен в следующем спринте.</li>
                        <li><strong>Low:</strong> Незначительное влияние, косметические дефекты.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Серьезность (Severity)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Определяет степень воздействия дефекта на систему. Устанавливается тестировщиком.
                      </p>
                      <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400">
                        <li><strong>Blocker:</strong> Полностью блокирует использование основной функциональности.</li>
                        <li><strong>Critical:</strong> Основная функциональность не работает, нет обходных путей.</li>
                        <li><strong>Major:</strong> Часть функциональности не работает, есть обходные пути.</li>
                        <li><strong>Minor:</strong> Незначительное нарушение функциональности, легко обойти.</li>
                        <li><strong>Trivial:</strong> Косметические дефекты, не влияющие на функциональность.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tools */}
          <TabsContent value="tools" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Инструменты для трекинга багов
                </CardTitle>
                <CardDescription>
                  Популярные системы для управления дефектами и задачами.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Системы трекинга багов (Bug Tracking Systems) помогают централизованно управлять дефектами, отслеживать их статус и взаимодействовать с командой.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Jira</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Одна из самых популярных систем для управления проектами и отслеживания задач, включая баги.
                        Широко используется в Agile-командах.
                      </p>
                      <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400">
                        <li>Настраиваемые рабочие процессы для багов.</li>
                        <li>Интеграция с Confluence для документации [^8].</li>
                        <li>Плагины для тест-менеджмента (Xray, Zephyr) [^8].</li>
                        <li>Отчеты и дашборды для анализа дефектов.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Trello</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Простая и интуитивно понятная канбан-доска для управления задачами.
                        Подходит для небольших команд или личного использования.
                      </p>
                      <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400">
                        <li>Визуальное представление задач (карточки).</li>
                        <li>Легкое перемещение багов между статусами.</li>
                        <li>Чек-листы внутри карточек.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">YouTrack</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Гибкая система для управления проектами и задачами от JetBrains.
                        Ориентирована на разработчиков и QA.
                      </p>
                      <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400">
                        <li>Мощный язык запросов для поиска задач.</li>
                        <li>Настраиваемые поля и рабочие процессы.</li>
                        <li>Интеграция с другими продуктами JetBrains.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Azure DevOps</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Комплексная платформа от Microsoft для всего цикла разработки ПО, включая управление багами.
                        Часто используется в больших корпорациях.
                      </p>
                      <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400">
                        <li>Управление рабочими элементами (Work Items).</li>
                        <li>Интеграция с Git-репозиториями.</li>
                        <li>Планы тестирования и выполнение тестов.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/documentation">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Предыдущий раздел
            </Button>
          </Link>
          <Link href="/sql-databases">
            <Button>
              Следующий раздел: SQL и базы данных
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
