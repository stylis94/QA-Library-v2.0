'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const glossaryTerms = [
  {
    term: "Acceptance Testing",
    definition: "Формальное тестирование для определения готовности системы к развертыванию и использованию конечными пользователями.",
    category: "Уровни тестирования",
    synonyms: ["UAT", "User Acceptance Testing"]
  },
  {
    term: "API Testing",
    definition: "Тестирование интерфейсов прикладного программирования для проверки корректности обмена данными между системами.",
    category: "Типы тестирования",
    synonyms: ["Application Programming Interface Testing"]
  },
  {
    term: "Bug",
    definition: "Дефект или ошибка в программном обеспечении, которая приводит к неожиданному или неправильному поведению системы.",
    category: "Дефекты",
    synonyms: ["Дефект", "Ошибка", "Issue"]
  },
  {
    term: "Black Box Testing",
    definition: "Метод тестирования, при котором тестировщик не имеет доступа к внутренней структуре и коду приложения.",
    category: "Методы тестирования",
    synonyms: ["Тестирование черного ящика"]
  },
  {
    term: "Boundary Value Analysis",
    definition: "Техника тест-дизайна, основанная на тестировании граничных значений входных данных.",
    category: "Техники тест-дизайна",
    synonyms: ["BVA", "Анализ граничных значений"]
  },
  {
    term: "Code Coverage",
    definition: "Метрика, показывающая процент кода, который был выполнен во время тестирования.",
    category: "Метрики",
    synonyms: ["Покрытие кода"]
  },
  {
    term: "Defect",
    definition: "Несоответствие между фактическим и ожидаемым результатом работы программы.",
    category: "Дефекты",
    synonyms: ["Bug", "Дефект", "Ошибка"]
  },
  {
    term: "End-to-End Testing",
    definition: "Тестирование полного пользовательского сценария от начала до конца для проверки работы всей системы.",
    category: "Типы тестирования",
    synonyms: ["E2E Testing", "Сквозное тестирование"]
  },
  {
    term: "Equivalence Partitioning",
    definition: "Техника тест-дизайна, при которой входные данные разделяются на группы эквивалентных значений.",
    category: "Техники тест-дизайна",
    synonyms: ["EP", "Эквивалентное разделение"]
  },
  {
    term: "Functional Testing",
    definition: "Тестирование функциональности системы в соответствии с заданными требованиями.",
    category: "Типы тестирования",
    synonyms: ["Функциональное тестирование"]
  },
  {
    term: "Integration Testing",
    definition: "Тестирование взаимодействия между интегрированными компонентами или системами.",
    category: "Уровни тестирования",
    synonyms: ["Интеграционное тестирование"]
  },
  {
    term: "Load Testing",
    definition: "Тип тестирования производительности, проверяющий поведение системы при ожидаемой нагрузке.",
    category: "Тестирование производительности",
    synonyms: ["Нагрузочное тестирование"]
  },
  {
    term: "Manual Testing",
    definition: "Процесс тестирования программного обеспечения, выполняемый человеком без использования автоматизированных инструментов.",
    category: "Методы тестирования",
    synonyms: ["Ручное тестирование"]
  },
  {
    term: "Non-Functional Testing",
    definition: "Тестирование нефункциональных аспектов системы, таких как производительность, безопасность, удобство использования.",
    category: "Типы тестирования",
    synonyms: ["Нефункциональное тестирование"]
  },
  {
    term: "Priority",
    definition: "Важность исправления дефекта с точки зрения бизнеса и пользователей.",
    category: "Управление дефектами",
    synonyms: ["Приоритет"]
  },
  {
    term: "QA",
    definition: "Quality Assurance - процесс обеспечения качества, направленный на предотвращение дефектов в процессе разработки.",
    category: "Основы QA",
    synonyms: ["Quality Assurance", "Обеспечение качества"]
  },
  {
    term: "QC",
    definition: "Quality Control - процесс контроля качества, направленный на обнаружение дефектов в готовом продукте.",
    category: "Основы QA",
    synonyms: ["Quality Control", "Контроль качества"]
  },
  {
    term: "Regression Testing",
    definition: "Повторное тестирование для проверки того, что изменения в коде не повлияли на существующую функциональность.",
    category: "Типы тестирования",
    synonyms: ["Регрессионное тестирование"]
  },
  {
    term: "SDLC",
    definition: "Software Development Life Cycle - жизненный цикл разработки программного обеспечения.",
    category: "Процессы разработки",
    synonyms: ["Software Development Life Cycle", "Жизненный цикл разработки ПО"]
  },
  {
    term: "Severity",
    definition: "Степень влияния дефекта на функциональность системы.",
    category: "Управление дефектами",
    synonyms: ["Серьезность", "Критичность"]
  },
  {
    term: "Smoke Testing",
    definition: "Базовое тестирование основной функциональности для проверки стабильности сборки.",
    category: "Типы тестирования",
    synonyms: ["Build Verification Testing", "Дымовое тестирование"]
  },
  {
    term: "STLC",
    definition: "Software Testing Life Cycle - жизненный цикл тестирования программного обеспечения.",
    category: "Процессы тестирования",
    synonyms: ["Software Testing Life Cycle", "Жизненный цикл тестирования"]
  },
  {
    term: "System Testing",
    definition: "Тестирование полной интегрированной системы для проверки соответствия заданным требованиям.",
    category: "Уровни тестирования",
    synonyms: ["Системное тестирование"]
  },
  {
    term: "Test Case",
    definition: "Набор условий и переменных, при которых тестировщик определяет, работает ли система правильно.",
    category: "Тестовая документация",
    synonyms: ["Тест-кейс", "Тестовый случай"]
  },
  {
    term: "Test Plan",
    definition: "Документ, описывающий объем, подход, ресурсы и график тестовых мероприятий.",
    category: "Тестовая документация",
    synonyms: ["Тест-план", "План тестирования"]
  },
  {
    term: "Unit Testing",
    definition: "Тестирование отдельных компонентов или модулей программы изолированно от остальной системы.",
    category: "Уровни тестирования",
    synonyms: ["Модульное тестирование", "Юнит-тестирование"]
  },
  {
    term: "Usability Testing",
    definition: "Тестирование удобства использования и пользовательского опыта взаимодействия с системой.",
    category: "Типы тестирования",
    synonyms: ["Тестирование юзабилити"]
  },
  {
    term: "White Box Testing",
    definition: "Метод тестирования, при котором тестировщик имеет полный доступ к внутренней структуре и коду приложения.",
    category: "Методы тестирования",
    synonyms: ["Тестирование белого ящика", "Структурное тестирование"]
  }
]

const categories = [
  "Все категории",
  "Основы QA",
  "Процессы разработки",
  "Процессы тестирования",
  "Уровни тестирования",
  "Типы тестирования",
  "Методы тестирования",
  "Техники тест-дизайна",
  "Тестовая документация",
  "Управление дефектами",
  "Дефекты",
  "Метрики",
  "Тестирование производительности"
]

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Все категории")

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.synonyms.some(synonym => synonym.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "Все категории" || term.category === selectedCategory
    
    return matchesSearch && matchesCategory
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
                Глоссарий QA терминов
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Словарь основных терминов и определений в тестировании ПО
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              placeholder="Поиск по терминам, определениям или синонимам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Найдено терминов: <span className="font-medium">{filteredTerms.length}</span>
          </p>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((term, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">{term.term}</CardTitle>
                  <Badge variant="secondary" className="text-xs shrink-0">
                    {term.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4">
                  {term.definition}
                </CardDescription>
                
                {term.synonyms.length > 0 && (
                  <div>
                    <h4 className="font-medium text-sm mb-2">Синонимы:</h4>
                    <div className="flex flex-wrap gap-1">
                      {term.synonyms.map((synonym, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {synonym}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              По вашему запросу ничего не найдено
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("Все категории")
              }}
            >
              Сбросить фильтры
            </Button>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {glossaryTerms.length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Всего терминов
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {categories.length - 1}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Категорий
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {glossaryTerms.reduce((acc, term) => acc + term.synonyms.length, 0)}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Синонимов
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                100%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                На русском
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
